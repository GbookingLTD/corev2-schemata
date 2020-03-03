package ru.gbooking.apiv2;

import java.util.*;
import java.io.IOException;

public enum Sex {
    FEMALE, MALE, NOT_SPECIFIED;

    public String toValue() {
        switch (this) {
        case FEMALE: return "FEMALE";
        case MALE: return "MALE";
        case NOT_SPECIFIED: return "NOT_SPECIFIED";
        }
        return null;
    }

    public static Sex forValue(String value) throws IOException {
        if (value.equals("FEMALE")) return FEMALE;
        if (value.equals("MALE")) return MALE;
        if (value.equals("NOT_SPECIFIED")) return NOT_SPECIFIED;
        throw new IOException("Cannot deserialize Sex");
    }
}
