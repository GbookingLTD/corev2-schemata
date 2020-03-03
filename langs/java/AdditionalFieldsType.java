package ru.gbooking.apiv2;

import java.util.*;
import java.io.IOException;

public enum AdditionalFieldsType {
    BOOL, COUPON, FILE, RADIO, STRING;

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

    public static AdditionalFieldsType forValue(String value) throws IOException {
        if (value.equals("BOOL")) return BOOL;
        if (value.equals("COUPON")) return COUPON;
        if (value.equals("FILE")) return FILE;
        if (value.equals("RADIO")) return RADIO;
        if (value.equals("STRING")) return STRING;
        throw new IOException("Cannot deserialize AdditionalFieldsType");
    }
}
