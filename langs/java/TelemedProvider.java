package ru.gbooking.apiv2;

import java.util.*;
import java.io.IOException;
import com.fasterxml.jackson.annotation.*;

public enum TelemedProvider {
    DISABLE, ZOOM;

    @JsonValue
    public String toValue() {
        switch (this) {
        case DISABLE: return "DISABLE";
        case ZOOM: return "zoom";
        }
        return null;
    }

    @JsonCreator
    public static TelemedProvider forValue(String value) throws IOException {
        if (value.equals("DISABLE")) return DISABLE;
        if (value.equals("zoom")) return ZOOM;
        throw new IOException("Cannot deserialize TelemedProvider");
    }
}
