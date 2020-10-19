package ru.gbooking.apiv2;

import java.io.IOException;
import java.io.IOException;
import com.fasterxml.jackson.core.*;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.databind.annotation.*;
import com.fasterxml.jackson.core.type.*;
import java.time.OffsetDateTime;

@JsonDeserialize(using = TimeFrameDate.Deserializer.class)
@JsonSerialize(using = TimeFrameDate.Serializer.class)
public class TimeFrameDate {
    public Double doubleValue;
    public OffsetDateTime dateTimeValue;

    static class Deserializer extends JsonDeserializer<TimeFrameDate> {
        @Override
        public TimeFrameDate deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException, JsonProcessingException {
            TimeFrameDate value = new TimeFrameDate();
            switch (jsonParser.currentToken()) {
                case VALUE_NULL:
                    break;
                case VALUE_NUMBER_INT:
                case VALUE_NUMBER_FLOAT:
                    value.doubleValue = jsonParser.readValueAs(Double.class);
                    break;
                case VALUE_STRING:
                    String string = jsonParser.readValueAs(String.class);
                    try {
                        value.dateTimeValue = Converter.parseDateTimeString(string);
                    } catch (Exception ex) {
                        // Ignored
                    }
                    break;
                default: throw new IOException("Cannot deserialize TimeFrameDate");
            }
            return value;
        }
    }

    static class Serializer extends JsonSerializer<TimeFrameDate> {
        @Override
        public void serialize(TimeFrameDate obj, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException {
            if (obj.doubleValue != null) {
                jsonGenerator.writeObject(obj.doubleValue);
                return;
            }
            if (obj.dateTimeValue != null) {
                jsonGenerator.writeObject(obj.dateTimeValue.format(java.time.format.DateTimeFormatter.ISO_OFFSET_DATE_TIME));
                return;
            }
            jsonGenerator.writeNull();
        }
    }
}
