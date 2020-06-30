package ru.gbooking.apiv2;

import java.io.IOException;
import com.fasterxml.jackson.annotation.*;

public enum FluffyTelemedProvider {
    DISABLE, MMCONF, ZOOM;

    @JsonValue
    public String toValue() {
        switch (this) {
            case DISABLE: return "DISABLE";
            case MMCONF: return "mmconf";
            case ZOOM: return "zoom";
        }
        return null;
    }

    @JsonCreator
    public static FluffyTelemedProvider forValue(String value) throws IOException {
        if (value.equals("DISABLE")) return DISABLE;
        if (value.equals("mmconf")) return MMCONF;
        if (value.equals("zoom")) return ZOOM;
        throw new IOException("Cannot deserialize FluffyTelemedProvider");
    }
}
