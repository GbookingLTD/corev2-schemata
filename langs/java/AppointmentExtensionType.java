package ru.gbooking.apiv2;

import java.io.IOException;
import com.fasterxml.jackson.annotation.*;

public enum AppointmentExtensionType {
    MINUTES, PERCENT;

    @JsonValue
    public String toValue() {
        switch (this) {
            case MINUTES: return "MINUTES";
            case PERCENT: return "PERCENT";
        }
        return null;
    }

    @JsonCreator
    public static AppointmentExtensionType forValue(String value) throws IOException {
        if (value.equals("MINUTES")) return MINUTES;
        if (value.equals("PERCENT")) return PERCENT;
        throw new IOException("Cannot deserialize AppointmentExtensionType");
    }
}
