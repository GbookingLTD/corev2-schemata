package ru.gbooking.apiv2;

import java.util.*;
import java.io.IOException;
import com.fasterxml.jackson.annotation.*;

public enum YandexFeedType {
    DYNAMIC, NO, STATIC, STATIC_SERVICE_ONLY;

    @JsonValue
    public String toValue() {
        switch (this) {
        case DYNAMIC: return "dynamic";
        case NO: return "no";
        case STATIC: return "static";
        case STATIC_SERVICE_ONLY: return "static-service-only";
        }
        return null;
    }

    @JsonCreator
    public static YandexFeedType forValue(String value) throws IOException {
        if (value.equals("dynamic")) return DYNAMIC;
        if (value.equals("no")) return NO;
        if (value.equals("static")) return STATIC;
        if (value.equals("static-service-only")) return STATIC_SERVICE_ONLY;
        throw new IOException("Cannot deserialize YandexFeedType");
    }
}
