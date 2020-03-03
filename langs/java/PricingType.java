package ru.gbooking.apiv2;

import java.util.*;
import java.io.IOException;

public enum PricingType {
    DEFAULT, MASTER_TOPMASTER;

    public String toValue() {
        switch (this) {
        case DEFAULT: return "DEFAULT";
        case MASTER_TOPMASTER: return "MASTER_TOPMASTER";
        }
        return null;
    }

    public static PricingType forValue(String value) throws IOException {
        if (value.equals("DEFAULT")) return DEFAULT;
        if (value.equals("MASTER_TOPMASTER")) return MASTER_TOPMASTER;
        throw new IOException("Cannot deserialize PricingType");
    }
}
