package ru.gbooking.apiv2;

import java.util.*;
import java.io.IOException;
import com.fasterxml.jackson.core.*;
import com.fasterxml.jackson.core.type.*;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.databind.annotation.*;

/**
 * Информация о скидке
 */
@JsonDeserialize(using = Discount.Deserializer.class)
@JsonSerialize(using = Discount.Serializer.class)
public class Discount {
    public Double doubleValue;
    public Long integerValue;
    public Boolean boolValue;
    public String stringValue;
    public List<Object> anythingArrayValue;
    public DiscountClass discountClassValue;

    static class Deserializer extends JsonDeserializer<Discount> {
        @Override
        public Discount deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException, JsonProcessingException {
            Discount value = new Discount();
            switch (jsonParser.getCurrentToken()) {
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
                value.stringValue = jsonParser.readValueAs(String.class);
                break;
            case START_ARRAY:
                value.anythingArrayValue = jsonParser.readValueAs(new TypeReference<List<Object>>() {});
                break;
            case START_OBJECT:
                value.discountClassValue = jsonParser.readValueAs(DiscountClass.class);
                break;
            default: throw new IOException("Cannot deserialize Discount");
            }
            return value;
        }
    }

    static class Serializer extends JsonSerializer<Discount> {
        @Override
        public void serialize(Discount obj, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException {
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
            if (obj.discountClassValue != null) {
                jsonGenerator.writeObject(obj.discountClassValue);
                return;
            }
            jsonGenerator.writeNull();
        }
    }
}
