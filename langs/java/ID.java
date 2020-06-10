package ru.gbooking.apiv2;

import java.util.*;
import java.io.IOException;
import com.fasterxml.jackson.core.*;
import com.fasterxml.jackson.core.type.*;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.databind.annotation.*;

@JsonDeserialize(using = ID.Deserializer.class)
@JsonSerialize(using = ID.Serializer.class)
public class ID {
    public List<String> stringArrayValue;
    public String stringValue;

    static class Deserializer extends JsonDeserializer<ID> {
        @Override
        public ID deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException, JsonProcessingException {
            ID value = new ID();
            switch (jsonParser.getCurrentToken()) {
            case VALUE_STRING:
                value.stringValue = jsonParser.readValueAs(String.class);
                break;
            case START_ARRAY:
                value.stringArrayValue = jsonParser.readValueAs(new TypeReference<List<String>>() {});
                break;
            default: throw new IOException("Cannot deserialize ID");
            }
            return value;
        }
    }

    static class Serializer extends JsonSerializer<ID> {
        @Override
        public void serialize(ID obj, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException {
            if (obj.stringArrayValue != null) {
                jsonGenerator.writeObject(obj.stringArrayValue);
                return;
            }
            if (obj.stringValue != null) {
                jsonGenerator.writeObject(obj.stringValue);
                return;
            }
            throw new IOException("ID must not be null");
        }
    }
}
