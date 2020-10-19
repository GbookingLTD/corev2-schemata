package ru.gbooking.apiv2;

import java.io.IOException;
import com.fasterxml.jackson.annotation.*;

public enum DiscountType {
    PERCENT;

    @JsonValue
    public String toValue() {
        switch (this) {
            case PERCENT: return "PERCENT";
        }
        return null;
    }

    @JsonCreator
    public static DiscountType forValue(String value) throws IOException {
        if (value.equals("PERCENT")) return PERCENT;
        throw new IOException("Cannot deserialize DiscountType");
    }
}
