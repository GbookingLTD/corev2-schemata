package ru.gbooking.apiv2;

import java.io.IOException;
import com.fasterxml.jackson.annotation.*;

public enum Rule {
    CUSTOM, NEAREST_INTEGER, TWO_DECIMALS;

    @JsonValue
    public String toValue() {
        switch (this) {
            case CUSTOM: return "CUSTOM";
            case NEAREST_INTEGER: return "NEAREST_INTEGER";
            case TWO_DECIMALS: return "TWO_DECIMALS";
        }
        return null;
    }

    @JsonCreator
    public static Rule forValue(String value) throws IOException {
        if (value.equals("CUSTOM")) return CUSTOM;
        if (value.equals("NEAREST_INTEGER")) return NEAREST_INTEGER;
        if (value.equals("TWO_DECIMALS")) return TWO_DECIMALS;
        throw new IOException("Cannot deserialize Rule");
    }
}
