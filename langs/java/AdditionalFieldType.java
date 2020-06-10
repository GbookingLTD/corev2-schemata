package ru.gbooking.apiv2;

import java.util.*;
import java.io.IOException;
import com.fasterxml.jackson.annotation.*;

public enum AdditionalFieldType {
    BOOL, COUPON, FILE, RADIO, STRING;

    @JsonValue
    public String toValue() {
        switch (this) {
        case BOOL: return "BOOL";
        case COUPON: return "COUPON";
        case FILE: return "FILE";
        case RADIO: return "RADIO";
        case STRING: return "STRING";
        }
        return null;
    }

    @JsonCreator
    public static AdditionalFieldType forValue(String value) throws IOException {
        if (value.equals("BOOL")) return BOOL;
        if (value.equals("COUPON")) return COUPON;
        if (value.equals("FILE")) return FILE;
        if (value.equals("RADIO")) return RADIO;
        if (value.equals("STRING")) return STRING;
        throw new IOException("Cannot deserialize AdditionalFieldType");
    }
}
