package ru.gbooking.apiv2;

import java.util.*;
import java.io.IOException;
import com.fasterxml.jackson.annotation.*;

public enum SortField {
    CREATED, START;

    @JsonValue
    public String toValue() {
        switch (this) {
        case CREATED: return "created";
        case START: return "start";
        }
        return null;
    }

    @JsonCreator
    public static SortField forValue(String value) throws IOException {
        if (value.equals("created")) return CREATED;
        if (value.equals("start")) return START;
        throw new IOException("Cannot deserialize SortField");
    }
}
