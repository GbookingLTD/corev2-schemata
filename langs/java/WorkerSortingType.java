package ru.gbooking.apiv2;

import java.io.IOException;
import com.fasterxml.jackson.annotation.*;

/**
 * тип сортировки работника
 */
public enum WorkerSortingType {
    MOST_FREE, NONE, WORKLOAD;

    @JsonValue
    public String toValue() {
        switch (this) {
            case MOST_FREE: return "most_free";
            case NONE: return "none";
            case WORKLOAD: return "workload";
        }
        return null;
    }

    @JsonCreator
    public static WorkerSortingType forValue(String value) throws IOException {
        if (value.equals("most_free")) return MOST_FREE;
        if (value.equals("none")) return NONE;
        if (value.equals("workload")) return WORKLOAD;
        throw new IOException("Cannot deserialize WorkerSortingType");
    }
}
