package ru.gbooking.apiv2;

import java.util.*;
import java.io.IOException;

public enum Group {
    FRENCH, GENERAL, HUNGARIAN, LATVIAN;

    public String toValue() {
        switch (this) {
        case FRENCH: return "FRENCH";
        case GENERAL: return "GENERAL";
        case HUNGARIAN: return "HUNGARIAN";
        case LATVIAN: return "LATVIAN";
        }
        return null;
    }

    public static Group forValue(String value) throws IOException {
        if (value.equals("FRENCH")) return FRENCH;
        if (value.equals("GENERAL")) return GENERAL;
        if (value.equals("HUNGARIAN")) return HUNGARIAN;
        if (value.equals("LATVIAN")) return LATVIAN;
        throw new IOException("Cannot deserialize Group");
    }
}
