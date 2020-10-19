package ru.gbooking.apiv2;

import java.io.IOException;
import com.fasterxml.jackson.annotation.*;

public enum ChildrenTaxonomyType {
    CHILD, NONE, PARENT;

    @JsonValue
    public String toValue() {
        switch (this) {
            case CHILD: return "child";
            case NONE: return "none";
            case PARENT: return "parent";
        }
        return null;
    }

    @JsonCreator
    public static ChildrenTaxonomyType forValue(String value) throws IOException {
        if (value.equals("child")) return CHILD;
        if (value.equals("none")) return NONE;
        if (value.equals("parent")) return PARENT;
        throw new IOException("Cannot deserialize ChildrenTaxonomyType");
    }
}
