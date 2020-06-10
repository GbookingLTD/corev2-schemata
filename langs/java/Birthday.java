package ru.gbooking.apiv2;

import java.util.*;
import java.io.IOException;
import com.fasterxml.jackson.core.*;
import com.fasterxml.jackson.core.type.*;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.databind.annotation.*;

@JsonDeserialize(using = Birthday.Deserializer.class)
@JsonSerialize(using = Birthday.Serializer.class)
public class Birthday {
    public String stringValue;
    public Map<String, Object> anythingMapValue;

    static class Deserializer extends JsonDeserializer<Birthday> {
        @Override
        public Birthday deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException, JsonProcessingException {
            Birthday value = new Birthday();
            switch (jsonParser.getCurrentToken()) {
            case VALUE_NULL:
                break;
            case VALUE_STRING:
                value.stringValue = jsonParser.readValueAs(String.class);
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
