package ru.gbooking.apiv2;

import java.util.*;
import java.io.IOException;

public enum CracServer {
    CRAC, CRAC_PROD3;

    public String toValue() {
        switch (this) {
        case CRAC: return "CRAC";
        case CRAC_PROD3: return "CRAC_PROD3";
        }
        return null;
    }

    public static CracServer forValue(String value) throws IOException {
        if (value.equals("CRAC")) return CRAC;
        if (value.equals("CRAC_PROD3")) return CRAC_PROD3;
        throw new IOException("Cannot deserialize CracServer");
    }
}
