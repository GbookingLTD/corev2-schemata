package ru.gbooking.apiv2;

import java.io.IOException;
import com.fasterxml.jackson.annotation.*;

public enum BackofficeType {
    COMMON, GT, LL, MB, MU;

    @JsonValue
    public String toValue() {
        switch (this) {
            case COMMON: return "COMMON";
            case GT: return "GT";
            case LL: return "LL";
            case MB: return "MB";
            case MU: return "MU";
        }
        return null;
    }

    @JsonCreator
    public static BackofficeType forValue(String value) throws IOException {
        if (value.equals("COMMON")) return COMMON;
        if (value.equals("GT")) return GT;
        if (value.equals("LL")) return LL;
        if (value.equals("MB")) return MB;
        if (value.equals("MU")) return MU;
        throw new IOException("Cannot deserialize BackofficeType");
    }
}
