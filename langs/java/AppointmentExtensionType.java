package ru.gbooking.apiv2;

import java.util.*;
import java.io.IOException;

public enum AppointmentExtensionType {
    MINUTES, PERCENT;

    public String toValue() {
        switch (this) {
        case MINUTES: return "MINUTES";
        case PERCENT: return "PERCENT";
        }
        return null;
    }

    public static AppointmentExtensionType forValue(String value) throws IOException {
        if (value.equals("MINUTES")) return MINUTES;
        if (value.equals("PERCENT")) return PERCENT;
        throw new IOException("Cannot deserialize AppointmentExtensionType");
    }
}
