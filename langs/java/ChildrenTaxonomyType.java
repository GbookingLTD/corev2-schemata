package ru.gbooking.apiv2;

import java.util.*;
import java.io.IOException;

public enum ChildrenTaxonomyType {
    CHILD, NONE, PARENT;

    public String toValue() {
        switch (this) {
        case CHILD: return "child";
        case NONE: return "none";
        case PARENT: return "parent";
        }
        return null;
    }

    public static ChildrenTaxonomyType forValue(String value) throws IOException {
        if (value.equals("child")) return CHILD;
        if (value.equals("none")) return NONE;
        if (value.equals("parent")) return PARENT;
        throw new IOException("Cannot deserialize ChildrenTaxonomyType");
    }
}
