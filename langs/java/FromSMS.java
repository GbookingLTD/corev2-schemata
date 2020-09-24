package ru.gbooking.apiv2;

import java.util.*;
import java.io.IOException;
import com.fasterxml.jackson.core.*;
import com.fasterxml.jackson.core.type.*;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.databind.annotation.*;

@JsonDeserialize(using = FromSMS.Deserializer.class)
@JsonSerialize(using = FromSMS.Serializer.class)
public class FromSMS {
    public Boolean boolValue;
    public String stringValue;

    static class Deserializer extends JsonDeserializer<FromSMS> {
        @Override
        public FromSMS deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException, JsonProcessingException {
            FromSMS value = new FromSMS();
            switch (jsonParser.getCurrentToken()) {
            case VALUE_NULL:
                break;
            case VALUE_TRUE:
            case VALUE_FALSE:
                value.boolValue = jsonParser.readValueAs(Boolean.class);
                break;
            case VALUE_STRING:
                value.stringValue = jsonParser.readValueAs(String.class);
                break;
            default: throw new IOException("Cannot deserialize FromSMS");
            }
            return value;
        }
    }

    static class Serializer extends JsonSerializer<FromSMS> {
        @Override
        public void serialize(FromSMS obj, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException {
            if (obj.boolValue != null) {
                jsonGenerator.writeObject(obj.boolValue);
                return;
            }
            if (obj.stringValue != null) {
                jsonGenerator.writeObject(obj.stringValue);
                return;
            }
            jsonGenerator.writeNull();
        }
    }
}
