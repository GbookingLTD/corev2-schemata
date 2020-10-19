package ru.gbooking.apiv2;

import java.io.IOException;
import com.fasterxml.jackson.annotation.*;

public enum Payment {
    OPTIONAL, REQUIRED, WITHOUT;

    @JsonValue
    public String toValue() {
        switch (this) {
            case OPTIONAL: return "OPTIONAL";
            case REQUIRED: return "REQUIRED";
            case WITHOUT: return "WITHOUT";
        }
        return null;
    }

    @JsonCreator
    public static Payment forValue(String value) throws IOException {
        if (value.equals("OPTIONAL")) return OPTIONAL;
        if (value.equals("REQUIRED")) return REQUIRED;
        if (value.equals("WITHOUT")) return WITHOUT;
        throw new IOException("Cannot deserialize Payment");
    }
}
