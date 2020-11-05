package ru.gbooking.apiv2;

import java.io.IOException;
import com.fasterxml.jackson.annotation.*;

public enum Dir {
    ASC, DESC;

    @JsonValue
    public String toValue() {
        switch (this) {
            case ASC: return "asc";
            case DESC: return "desc";
        }
        return null;
    }

    @JsonCreator
    public static Dir forValue(String value) throws IOException {
        if (value.equals("asc")) return ASC;
        if (value.equals("desc")) return DESC;
        throw new IOException("Cannot deserialize Dir");
    }
}
