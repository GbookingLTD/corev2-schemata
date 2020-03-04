package ru.gbooking.apiv2;

import java.util.*;
import java.io.IOException;
import com.fasterxml.jackson.annotation.*;

public enum Status {
    ACTIVE, INACTIVE;

    @JsonValue
    public String toValue() {
        switch (this) {
        case ACTIVE: return "ACTIVE";
        case INACTIVE: return "INACTIVE";
        }
        return null;
    }

    @JsonCreator
    public static Status forValue(String value) throws IOException {
        if (value.equals("ACTIVE")) return ACTIVE;
        if (value.equals("INACTIVE")) return INACTIVE;
        throw new IOException("Cannot deserialize Status");
    }
}
