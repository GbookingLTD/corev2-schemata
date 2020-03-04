package ru.gbooking.apiv2;

import java.util.*;
import java.io.IOException;
import com.fasterxml.jackson.core.*;
import com.fasterxml.jackson.core.type.*;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.databind.annotation.*;

@JsonDeserialize(using = Phone.Deserializer.class)
@JsonSerialize(using = Phone.Serializer.class)
public class Phone {
    public Double doubleValue;
    public Long integerValue;
    public Boolean boolValue;
    public String stringValue;
    public List<Object> anythingArrayValue;
    public PhoneClass phoneClassValue;

    static class Deserializer extends JsonDeserializer<Phone> {
        @Override
        public Phone deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException, JsonProcessingException {
            Phone value = new Phone();
            switch (jsonParser.getCurrentToken()) {
            case VALUE_NULL:
                break;
            case VALUE_NUMBER_INT:
                value.integerValue = jsonParser.readValueAs(Long.class);
                break;
            case VALUE_NUMBER_FLOAT:
                value.doubleValue = jsonParser.readValueAs(Double.class);
                break;
            case VALUE_TRUE:
            case VALUE_FALSE:
                value.boolValue = jsonParser.readValueAs(Boolean.class);
                break;
            case VALUE_STRING:
                value.stringValue = jsonParser.readValueAs(String.class);
                break;
            case START_ARRAY:
                value.anythingArrayValue = jsonParser.readValueAs(new TypeReference<List<Object>>() {});
                break;
            case START_OBJECT:
                value.phoneClassValue = jsonParser.readValueAs(PhoneClass.class);
                break;
            default: throw new IOException("Cannot deserialize Phone");
            }
            return value;
        }
    }

    static class Serializer extends JsonSerializer<Phone> {
        @Override
        public void serialize(Phone obj, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException {
            if (obj.doubleValue != null) {
                jsonGenerator.writeObject(obj.doubleValue);
                return;
            }
            if (obj.integerValue != null) {
                jsonGenerator.writeObject(obj.integerValue);
                return;
            }
            if (obj.boolValue != null) {
                jsonGenerator.writeObject(obj.boolValue);
                return;
            }
            if (obj.stringValue != null) {
                jsonGenerator.writeObject(obj.stringValue);
                return;
            }
            if (obj.anythingArrayValue != null) {
                jsonGenerator.writeObject(obj.anythingArrayValue);
                return;
            }
            if (obj.phoneClassValue != null) {
                jsonGenerator.writeObject(obj.phoneClassValue);
                return;
            }
            jsonGenerator.writeNull();
        }
    }
}
