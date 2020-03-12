package ru.gbooking.apiv2;

import java.util.*;
import java.io.IOException;
import com.fasterxml.jackson.core.*;
import com.fasterxml.jackson.core.type.*;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.databind.annotation.*;

/**
 * значение числового типа для идентификации запроса на сервере
 *
 * идентификатор сети
 *
 * идентификатор витрины (передаётся вместе с with_taxonomy_showcase)
 *
 * идентификатор бизнеса
 */
@JsonDeserialize(using = RequestTimeFrameDate.Deserializer.class)
@JsonSerialize(using = RequestTimeFrameDate.Serializer.class)
public class RequestTimeFrameDate {
    public Double doubleValue;
    public String stringValue;

    static class Deserializer extends JsonDeserializer<RequestTimeFrameDate> {
        @Override
        public RequestTimeFrameDate deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException, JsonProcessingException {
            RequestTimeFrameDate value = new RequestTimeFrameDate();
            switch (jsonParser.getCurrentToken()) {
            case VALUE_NUMBER_INT:
            case VALUE_NUMBER_FLOAT:
                value.doubleValue = jsonParser.readValueAs(Double.class);
                break;
            case VALUE_STRING:
                value.stringValue = jsonParser.readValueAs(String.class);
                break;
            default: throw new IOException("Cannot deserialize RequestTimeFrameDate");
            }
            return value;
        }
    }

    static class Serializer extends JsonSerializer<RequestTimeFrameDate> {
        @Override
        public void serialize(RequestTimeFrameDate obj, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException {
            if (obj.doubleValue != null) {
                jsonGenerator.writeObject(obj.doubleValue);
                return;
            }
            if (obj.stringValue != null) {
                jsonGenerator.writeObject(obj.stringValue);
                return;
            }
            throw new IOException("RequestTimeFrameDate must not be null");
        }
    }
}
