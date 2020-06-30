package ru.gbooking.apiv2;

import java.io.IOException;
import com.fasterxml.jackson.annotation.*;

public enum Source {
    BACKOFFICE, MINI_WIDGET, MOBILE_WIDGET, WIDGET;

    @JsonValue
    public String toValue() {
        switch (this) {
            case BACKOFFICE: return "BACKOFFICE";
            case MINI_WIDGET: return "MINI_WIDGET";
            case MOBILE_WIDGET: return "MOBILE_WIDGET";
            case WIDGET: return "WIDGET";
        }
        return null;
    }

    @JsonCreator
    public static Source forValue(String value) throws IOException {
        if (value.equals("BACKOFFICE")) return BACKOFFICE;
        if (value.equals("MINI_WIDGET")) return MINI_WIDGET;
        if (value.equals("MOBILE_WIDGET")) return MOBILE_WIDGET;
        if (value.equals("WIDGET")) return WIDGET;
        throw new IOException("Cannot deserialize Source");
    }
}
