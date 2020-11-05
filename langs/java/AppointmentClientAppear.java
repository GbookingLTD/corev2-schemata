package ru.gbooking.apiv2;

import java.io.IOException;
import com.fasterxml.jackson.annotation.*;

public enum AppointmentClientAppear {
    NONE, NO_APPEAR, YES_APPEAR;

    @JsonValue
    public String toValue() {
        switch (this) {
            case NONE: return "NONE";
            case NO_APPEAR: return "NO_APPEAR";
            case YES_APPEAR: return "YES_APPEAR";
        }
        return null;
    }

    @JsonCreator
    public static AppointmentClientAppear forValue(String value) throws IOException {
        if (value.equals("NONE")) return NONE;
        if (value.equals("NO_APPEAR")) return NO_APPEAR;
        if (value.equals("YES_APPEAR")) return YES_APPEAR;
        throw new IOException("Cannot deserialize AppointmentClientAppear");
    }
}
