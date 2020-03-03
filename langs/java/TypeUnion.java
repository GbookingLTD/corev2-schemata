package ru.gbooking.apiv2;

import java.util.*;
import java.io.IOException;
import com.fasterxml.jackson.core.*;
import com.fasterxml.jackson.core.type.*;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.databind.annotation.*;

@JsonDeserialize(using = TypeUnion.Deserializer.class)
@JsonSerialize(using = TypeUnion.Serializer.class)
public class TypeUnion {
    public List<TypeElement> enumArrayValue;
    public TypeElement enumValue;

    static class Deserializer extends JsonDeserializer<TypeUnion> {
        @Override
        public TypeUnion deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException, JsonProcessingException {
            TypeUnion value = new TypeUnion();
            switch (jsonParser.getCurrentToken()) {
            case START_ARRAY:
                value.enumArrayValue = jsonParser.readValueAs(new TypeReference<List<TypeElement>>() {});
                break;
            case VALUE_STRING:
                value.enumValue = jsonParser.readValueAs(TypeElement.class);
                break;
            default: throw new IOException("Cannot deserialize TypeUnion");
            }
            return value;
        }
    }

    static class Serializer extends JsonSerializer<TypeUnion> {
        @Override
        public void serialize(TypeUnion obj, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException {
            if (obj.enumArrayValue != null) {
                jsonGenerator.writeObject(obj.enumArrayValue);
                return;
            }
            if (obj.enumValue != null) {
                jsonGenerator.writeObject(obj.enumValue);
                return;
            }
            throw new IOException("TypeUnion must not be null");
        }
    }
}
