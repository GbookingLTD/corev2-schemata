package ru.gbooking.apiv2;

import java.io.IOException;
import com.fasterxml.jackson.annotation.*;

public enum VerticalTranslation {
    BEAUTY, FITNESS, GENERIC, MEDICAL, NONE, SPORT, YOGA;

    @JsonValue
    public String toValue() {
        switch (this) {
            case BEAUTY: return "BEAUTY";
            case FITNESS: return "FITNESS";
            case GENERIC: return "GENERIC";
            case MEDICAL: return "MEDICAL";
            case NONE: return "NONE";
            case SPORT: return "SPORT";
            case YOGA: return "YOGA";
        }
        return null;
    }

    @JsonCreator
    public static VerticalTranslation forValue(String value) throws IOException {
        if (value.equals("BEAUTY")) return BEAUTY;
        if (value.equals("FITNESS")) return FITNESS;
        if (value.equals("GENERIC")) return GENERIC;
        if (value.equals("MEDICAL")) return MEDICAL;
        if (value.equals("NONE")) return NONE;
        if (value.equals("SPORT")) return SPORT;
        if (value.equals("YOGA")) return YOGA;
        throw new IOException("Cannot deserialize VerticalTranslation");
    }
}
