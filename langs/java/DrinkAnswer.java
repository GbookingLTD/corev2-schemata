package ru.gbooking.apiv2;

import java.io.IOException;
import com.fasterxml.jackson.annotation.*;

public enum DrinkAnswer {
    COFFEE, NOT_IMPORTANT, TEA;

    @JsonValue
    public String toValue() {
        switch (this) {
            case COFFEE: return "COFFEE";
            case NOT_IMPORTANT: return "NOT_IMPORTANT";
            case TEA: return "TEA";
        }
        return null;
    }

    @JsonCreator
    public static DrinkAnswer forValue(String value) throws IOException {
        if (value.equals("COFFEE")) return COFFEE;
        if (value.equals("NOT_IMPORTANT")) return NOT_IMPORTANT;
        if (value.equals("TEA")) return TEA;
        throw new IOException("Cannot deserialize DrinkAnswer");
    }
}
