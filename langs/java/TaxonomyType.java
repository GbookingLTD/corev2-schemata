package ru.gbooking.apiv2;

import java.util.*;
import java.io.IOException;

public enum TaxonomyType {
    CATEGORY, SERVICE, SUBCATEGORY;

    public String toValue() {
        switch (this) {
        case CATEGORY: return "CATEGORY";
        case SERVICE: return "SERVICE";
        case SUBCATEGORY: return "SUBCATEGORY";
        }
        return null;
    }

    public static TaxonomyType forValue(String value) throws IOException {
        if (value.equals("CATEGORY")) return CATEGORY;
        if (value.equals("SERVICE")) return SERVICE;
        if (value.equals("SUBCATEGORY")) return SUBCATEGORY;
        throw new IOException("Cannot deserialize TaxonomyType");
    }
}
