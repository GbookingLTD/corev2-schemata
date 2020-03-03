package ru.gbooking.apiv2;

import java.util.*;
import java.io.IOException;
import com.fasterxml.jackson.annotation.*;

public enum TypeElement {
    ARRAY, BOOLEAN, NULL, NUMBER, OBJECT, STRING;

    @JsonValue
    public String toValue() {
        switch (this) {
        case ARRAY: return "array";
        case BOOLEAN: return "boolean";
        case NULL: return "null";
        case NUMBER: return "number";
        case OBJECT: return "object";
        case STRING: return "string";
        }
        return null;
    }

    @JsonCreator
    public static TypeElement forValue(String value) throws IOException {
        if (value.equals("array")) return ARRAY;
        if (value.equals("boolean")) return BOOLEAN;
        if (value.equals("null")) return NULL;
        if (value.equals("number")) return NUMBER;
        if (value.equals("object")) return OBJECT;
        if (value.equals("string")) return STRING;
        throw new IOException("Cannot deserialize TypeElement");
    }
}
