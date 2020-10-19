package ru.gbooking.apiv2;

import java.io.IOException;
import com.fasterxml.jackson.annotation.*;

/**
 * тип доступа работника в систему через его учётную запись
 */
public enum AccessType {
    NONE, WORKER_EXTENDED, WORKER_SIMPLE;

    @JsonValue
    public String toValue() {
        switch (this) {
            case NONE: return "NONE";
            case WORKER_EXTENDED: return "WORKER_EXTENDED";
            case WORKER_SIMPLE: return "WORKER_SIMPLE";
        }
        return null;
    }

    @JsonCreator
    public static AccessType forValue(String value) throws IOException {
        if (value.equals("NONE")) return NONE;
        if (value.equals("WORKER_EXTENDED")) return WORKER_EXTENDED;
        if (value.equals("WORKER_SIMPLE")) return WORKER_SIMPLE;
        throw new IOException("Cannot deserialize AccessType");
    }
}
