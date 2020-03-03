package ru.gbooking.apiv2;

import java.util.*;
import java.io.IOException;

/**
 * тип доступа работника в систему через его учётную запись
 */
public enum AccessType {
    NONE, WORKER_EXTENDED, WORKER_SIMPLE;

    public String toValue() {
        switch (this) {
        case NONE: return "NONE";
        case WORKER_EXTENDED: return "WORKER_EXTENDED";
        case WORKER_SIMPLE: return "WORKER_SIMPLE";
        }
        return null;
    }

    public static AccessType forValue(String value) throws IOException {
        if (value.equals("NONE")) return NONE;
        if (value.equals("WORKER_EXTENDED")) return WORKER_EXTENDED;
        if (value.equals("WORKER_SIMPLE")) return WORKER_SIMPLE;
        throw new IOException("Cannot deserialize AccessType");
    }
}
