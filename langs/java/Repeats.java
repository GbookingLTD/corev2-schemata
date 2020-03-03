package ru.gbooking.apiv2;

import java.util.*;
import java.io.IOException;

public enum Repeats {
    DAILY, NONE, WEEKLY;

    public String toValue() {
        switch (this) {
        case DAILY: return "daily";
        case NONE: return "none";
        case WEEKLY: return "weekly";
        }
        return null;
    }

    public static Repeats forValue(String value) throws IOException {
        if (value.equals("daily")) return DAILY;
        if (value.equals("none")) return NONE;
        if (value.equals("weekly")) return WEEKLY;
        throw new IOException("Cannot deserialize Repeats");
    }
}
