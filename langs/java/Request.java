package ru.gbooking.apiv2;

import java.io.IOException;
import java.io.IOException;
import com.fasterxml.jackson.core.*;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.databind.annotation.*;
import com.fasterxml.jackson.core.type.*;
import java.util.List;

/**
 * jsonrpc2 запрос
 */
@JsonDeserialize(using = Request.Deserializer.class)
@JsonSerialize(using = Request.Serializer.class)
public class Request {
    public Double doubleValue;
    public Long integerValue;
    public Boolean boolValue;
    public String stringValue;
    public List<Object> anythingArrayValue;
    public RequestClass requestClassValue;

    static class Deserializer extends JsonDeserializer<Request> {
        @Override
        public Request deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException, JsonProcessingException {
            Request value = new Request();
            switch (jsonParser.currentToken()) {
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
                    String string = jsonParser.readValueAs(String.class);
                    value.stringValue = string;
                    break;
                case START_ARRAY:
                    value.anythingArrayValue = jsonParser.readValueAs(new TypeReference<List<Object>>() {});
                    break;
                case START_OBJECT:
                    value.requestClassValue = jsonParser.readValueAs(RequestClass.class);
                    break;
                default: throw new IOException("Cannot deserialize Request");
            }
            return value;
        }
    }

    static class Serializer extends JsonSerializer<Request> {
        @Override
        public void serialize(Request obj, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException {
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
            if (obj.requestClassValue != null) {
                jsonGenerator.writeObject(obj.requestClassValue);
                return;
            }
            jsonGenerator.writeNull();
        }
    }
}
