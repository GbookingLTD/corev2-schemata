package ru.gbooking.apiv2;

import java.io.IOException;
import java.io.IOException;
import com.fasterxml.jackson.core.*;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.databind.annotation.*;
import com.fasterxml.jackson.core.type.*;
import java.util.Map;

@JsonDeserialize(using = Birthday.Deserializer.class)
@JsonSerialize(using = Birthday.Serializer.class)
public class Birthday {
    public String stringValue;
    public Map<String, Object> anythingMapValue;

    static class Deserializer extends JsonDeserializer<Birthday> {
        @Override
        public Birthday deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException, JsonProcessingException {
            Birthday value = new Birthday();
            switch (jsonParser.currentToken()) {
                case VALUE_NULL:
                    break;
                case VALUE_STRING:
                    String string = jsonParser.readValueAs(String.class);
                    value.stringValue = string;
                    break;
                case START_OBJECT:
                    value.anythingMapValue = jsonParser.readValueAs(Map.class);
                    break;
                default: throw new IOException("Cannot deserialize Birthday");
            }
            return value;
        }
    }

    static class Serializer extends JsonSerializer<Birthday> {
        @Override
        public void serialize(Birthday obj, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException {
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
