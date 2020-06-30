package ru.gbooking.apiv2;

import java.io.IOException;
import java.io.IOException;
import com.fasterxml.jackson.core.*;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.databind.annotation.*;
import com.fasterxml.jackson.core.type.*;

/**
 * значение числового типа для идентификации запроса на сервере
 *
 * идентификатор сети
 *
 * идентификатор витрины (передаётся вместе с with_taxonomy_showcase)
 *
 * идентификатор бизнеса
 *
 * идентификатор нетворка
 *
 * вес работника, в зависимости от указанного способа сортировки
 */
@JsonDeserialize(using = TaxiParkMemberCountUnion.Deserializer.class)
@JsonSerialize(using = TaxiParkMemberCountUnion.Serializer.class)
public class TaxiParkMemberCountUnion {
    public Double doubleValue;
    public String stringValue;

    static class Deserializer extends JsonDeserializer<TaxiParkMemberCountUnion> {
        @Override
        public TaxiParkMemberCountUnion deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException, JsonProcessingException {
            TaxiParkMemberCountUnion value = new TaxiParkMemberCountUnion();
            switch (jsonParser.currentToken()) {
                case VALUE_NULL:
                    break;
                case VALUE_NUMBER_INT:
                case VALUE_NUMBER_FLOAT:
                    value.doubleValue = jsonParser.readValueAs(Double.class);
                    break;
                case VALUE_STRING:
                    String string = jsonParser.readValueAs(String.class);
                    value.stringValue = string;
                    break;
                default: throw new IOException("Cannot deserialize TaxiParkMemberCountUnion");
            }
            return value;
        }
    }

    static class Serializer extends JsonSerializer<TaxiParkMemberCountUnion> {
        @Override
        public void serialize(TaxiParkMemberCountUnion obj, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException {
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
