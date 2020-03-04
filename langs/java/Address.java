package ru.gbooking.apiv2;

import java.util.*;
import java.io.IOException;
import com.fasterxml.jackson.core.*;
import com.fasterxml.jackson.core.type.*;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.databind.annotation.*;

@JsonDeserialize(using = Address.Deserializer.class)
@JsonSerialize(using = Address.Serializer.class)
public class Address {
    public Double doubleValue;
    public Long integerValue;
    public Boolean boolValue;
    public String stringValue;
    public List<Object> anythingArrayValue;
    public AddressCamelCaseSchema addressCamelCaseSchemaValue;

    static class Deserializer extends JsonDeserializer<Address> {
        @Override
        public Address deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException, JsonProcessingException {
            Address value = new Address();
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
                value.addressCamelCaseSchemaValue = jsonParser.readValueAs(AddressCamelCaseSchema.class);
                break;
            default: throw new IOException("Cannot deserialize Address");
            }
            return value;
        }
    }

    static class Serializer extends JsonSerializer<Address> {
        @Override
        public void serialize(Address obj, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException {
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
            if (obj.addressCamelCaseSchemaValue != null) {
                jsonGenerator.writeObject(obj.addressCamelCaseSchemaValue);
                return;
            }
            jsonGenerator.writeNull();
        }
    }
}
