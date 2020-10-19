package ru.gbooking.apiv2;

import java.io.IOException;
import com.fasterxml.jackson.annotation.*;

public enum PresentStatus {
    READY, RECEIVED;

    @JsonValue
    public String toValue() {
        switch (this) {
            case READY: return "READY";
            case RECEIVED: return "RECEIVED";
        }
        return null;
    }

    @JsonCreator
    public static PresentStatus forValue(String value) throws IOException {
        if (value.equals("READY")) return READY;
        if (value.equals("RECEIVED")) return RECEIVED;
        throw new IOException("Cannot deserialize PresentStatus");
    }
}
