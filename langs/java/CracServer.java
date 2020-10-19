package ru.gbooking.apiv2;

import java.io.IOException;
import com.fasterxml.jackson.annotation.*;

public enum CracServer {
    CRAC, CRAC_PROD3;

    @JsonValue
    public String toValue() {
        switch (this) {
            case CRAC: return "CRAC";
            case CRAC_PROD3: return "CRAC_PROD3";
        }
        return null;
    }

    @JsonCreator
    public static CracServer forValue(String value) throws IOException {
        if (value.equals("CRAC")) return CRAC;
        if (value.equals("CRAC_PROD3")) return CRAC_PROD3;
        throw new IOException("Cannot deserialize CracServer");
    }
}
