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
 *
 * вес работника, в зависимости от указанного способа сортировки
 */
@JsonDeserialize(using = EvenTimeFrameDate.Deserializer.class)
@JsonSerialize(using = EvenTimeFrameDate.Serializer.class)
public class EvenTimeFrameDate {
    public Double doubleValue;
    public String stringValue;

    static class Deserializer extends JsonDeserializer<EvenTimeFrameDate> {
        @Override
        public EvenTimeFrameDate deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException, JsonProcessingException {
            EvenTimeFrameDate value = new EvenTimeFrameDate();
            switch (jsonParser.getCurrentToken()) {
            case VALUE_NULL:
                break;
            case VALUE_NUMBER_INT:
            case VALUE_NUMBER_FLOAT:
                value.doubleValue = jsonParser.readValueAs(Double.class);
                break;
            case VALUE_STRING:
                value.stringValue = jsonParser.readValueAs(String.class);
                break;
            default: throw new IOException("Cannot deserialize EvenTimeFrameDate");
            }
            return value;
        }
    }

    static class Serializer extends JsonSerializer<EvenTimeFrameDate> {
        @Override
        public void serialize(EvenTimeFrameDate obj, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException {
            if (obj.doubleValue != null) {
                jsonGenerator.writeObject(obj.doubleValue);
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
