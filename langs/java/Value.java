package ru.gbooking.apiv2;

import java.io.IOException;
import java.io.IOException;
import com.fasterxml.jackson.core.*;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.databind.annotation.*;
import com.fasterxml.jackson.core.type.*;
import java.util.Map;

@JsonDeserialize(using = Value.Deserializer.class)
@JsonSerialize(using = Value.Serializer.class)
public class Value {
    public Double doubleValue;
    public Boolean boolValue;
    public String stringValue;
    public Map<String, Object> anythingMapValue;

    static class Deserializer extends JsonDeserializer<Value> {
        @Override
        public Value deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException, JsonProcessingException {
            Value value = new Value();
            switch (jsonParser.currentToken()) {
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
                    String string = jsonParser.readValueAs(String.class);
                    value.stringValue = string;
                    break;
                case START_OBJECT:
                    value.anythingMapValue = jsonParser.readValueAs(Map.class);
                    break;
                default: throw new IOException("Cannot deserialize Value");
            }
            return value;
        }
    }

    static class Serializer extends JsonSerializer<Value> {
        @Override
        public void serialize(Value obj, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException {
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
