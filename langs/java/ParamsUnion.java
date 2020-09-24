package ru.gbooking.apiv2;

import java.util.*;
import java.io.IOException;
import com.fasterxml.jackson.core.*;
import com.fasterxml.jackson.core.type.*;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.databind.annotation.*;

/**
 * параметры запроса
 */
@JsonDeserialize(using = ParamsUnion.Deserializer.class)
@JsonSerialize(using = ParamsUnion.Serializer.class)
public class ParamsUnion {
    public List<Object> anythingArrayValue;
    public Map<String, Object> anythingMapValue;

    static class Deserializer extends JsonDeserializer<ParamsUnion> {
        @Override
        public ParamsUnion deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException, JsonProcessingException {
            ParamsUnion value = new ParamsUnion();
            switch (jsonParser.getCurrentToken()) {
            case START_ARRAY:
                value.anythingArrayValue = jsonParser.readValueAs(new TypeReference<List<Object>>() {});
                break;
            case START_OBJECT:
                value.anythingMapValue = jsonParser.readValueAs(Map.class);
                break;
            default: throw new IOException("Cannot deserialize ParamsUnion");
            }
            return value;
        }
    }

    static class Serializer extends JsonSerializer<ParamsUnion> {
        @Override
        public void serialize(ParamsUnion obj, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException {
            if (obj.anythingArrayValue != null) {
                jsonGenerator.writeObject(obj.anythingArrayValue);
                return;
            }
            if (obj.anythingMapValue != null) {
                jsonGenerator.writeObject(obj.anythingMapValue);
                return;
            }
            throw new IOException("ParamsUnion must not be null");
        }
    }
}
