package ru.gbooking.apiv2;

import java.util.*;
import java.io.IOException;

public enum DiscountType {
    PERCENT;

    public String toValue() {
        switch (this) {
        case PERCENT: return "PERCENT";
        }
        return null;
    }

    public static DiscountType forValue(String value) throws IOException {
        if (value.equals("PERCENT")) return PERCENT;
        throw new IOException("Cannot deserialize DiscountType");
    }
}
