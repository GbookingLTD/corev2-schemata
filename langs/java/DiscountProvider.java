package ru.gbooking.apiv2;

import java.util.*;
import java.io.IOException;
import com.fasterxml.jackson.annotation.*;

public enum DiscountProvider {
    GROUPON, LOCAL, YANDEX;

    @JsonValue
    public String toValue() {
        switch (this) {
        case GROUPON: return "GROUPON";
        case LOCAL: return "LOCAL";
        case YANDEX: return "YANDEX";
        }
        return null;
    }

    @JsonCreator
    public static DiscountProvider forValue(String value) throws IOException {
        if (value.equals("GROUPON")) return GROUPON;
        if (value.equals("LOCAL")) return LOCAL;
        if (value.equals("YANDEX")) return YANDEX;
        throw new IOException("Cannot deserialize DiscountProvider");
    }
}
