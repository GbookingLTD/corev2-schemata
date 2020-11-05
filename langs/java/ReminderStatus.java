package ru.gbooking.apiv2;

import java.io.IOException;
import com.fasterxml.jackson.annotation.*;

public enum ReminderStatus {
    NOT_SET, OFF, ON;

    @JsonValue
    public String toValue() {
        switch (this) {
            case NOT_SET: return "NOT_SET";
            case OFF: return "OFF";
            case ON: return "ON";
        }
        return null;
    }

    @JsonCreator
    public static ReminderStatus forValue(String value) throws IOException {
        if (value.equals("NOT_SET")) return NOT_SET;
        if (value.equals("OFF")) return OFF;
        if (value.equals("ON")) return ON;
        throw new IOException("Cannot deserialize ReminderStatus");
    }
}
