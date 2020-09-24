package ru.gbooking.apiv2;

import java.util.*;
import java.io.IOException;
import com.fasterxml.jackson.core.*;
import com.fasterxml.jackson.core.type.*;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.databind.annotation.*;

@JsonDeserialize(using = FluffyValue.Deserializer.class)
@JsonSerialize(using = FluffyValue.Serializer.class)
public class FluffyValue {
    public Double doubleValue;
    public Boolean boolValue;
    public String stringValue;
    public Map<String, Object> anythingMapValue;

    static class Deserializer extends JsonDeserializer<FluffyValue> {
        @Override
        public FluffyValue deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException, JsonProcessingException {
            FluffyValue value = new FluffyValue();
            switch (jsonParser.getCurrentToken()) {
            case VALUE_NULL:
                break;
            case VALUE_NUMBER_INT:
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
            case START_OBJECT:
                value.anythingMapValue = jsonParser.readValueAs(Map.class);
                break;
            default: throw new IOException("Cannot deserialize FluffyValue");
            }
            return value;
        }
    }

    static class Serializer extends JsonSerializer<FluffyValue> {
        @Override
        public void serialize(FluffyValue obj, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException {
            if (obj.doubleValue != null) {
                jsonGenerator.writeObject(obj.doubleValue);
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
            if (obj.anythingMapValue != null) {
                jsonGenerator.writeObject(obj.anythingMapValue);
                return;
            }
            jsonGenerator.writeNull();
        }
    }
}
