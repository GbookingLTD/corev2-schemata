package ru.gbooking.apiv2;

import java.util.*;
import java.io.IOException;

public enum ResourceTimetableType {
    DEFAULT, EVENODD;

    public String toValue() {
        switch (this) {
        case DEFAULT: return "DEFAULT";
        case EVENODD: return "EVENODD";
        }
        return null;
    }

    public static ResourceTimetableType forValue(String value) throws IOException {
        if (value.equals("DEFAULT")) return DEFAULT;
        if (value.equals("EVENODD")) return EVENODD;
        throw new IOException("Cannot deserialize ResourceTimetableType");
    }
}
