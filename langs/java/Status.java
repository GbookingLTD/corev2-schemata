package ru.gbooking.apiv2;

import java.util.*;
import java.io.IOException;

public enum Status {
    ACTIVE, INACTIVE;

    public String toValue() {
        switch (this) {
        case ACTIVE: return "ACTIVE";
        case INACTIVE: return "INACTIVE";
        }
        return null;
    }

    public static Status forValue(String value) throws IOException {
        if (value.equals("ACTIVE")) return ACTIVE;
        if (value.equals("INACTIVE")) return INACTIVE;
        throw new IOException("Cannot deserialize Status");
    }
}
