package ru.gbooking.apiv2;

import java.util.*;
import java.io.IOException;
import com.fasterxml.jackson.annotation.*;

public enum Sex {
    EMPTY, FEMALE, MALE, NOT_SPECIFIED;

    @JsonValue
    public String toValue() {
        switch (this) {
        case EMPTY: return "";
        case FEMALE: return "FEMALE";
        case MALE: return "MALE";
        case NOT_SPECIFIED: return "NOT_SPECIFIED";
        }
        return null;
    }

    @JsonCreator
    public static Sex forValue(String value) throws IOException {
        if (value.equals("")) return EMPTY;
        if (value.equals("FEMALE")) return FEMALE;
        if (value.equals("MALE")) return MALE;
        if (value.equals("NOT_SPECIFIED")) return NOT_SPECIFIED;
        throw new IOException("Cannot deserialize Sex");
    }
}
