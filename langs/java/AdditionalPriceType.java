package ru.gbooking.apiv2;

import java.util.*;
import java.io.IOException;
import com.fasterxml.jackson.annotation.*;

/**
 * Тип цены
 */
public enum AdditionalPriceType {
    AVERAGE, BEGIN_WITH, EQUAL;

    @JsonValue
    public String toValue() {
        switch (this) {
        case AVERAGE: return "average";
        case BEGIN_WITH: return "begin_with";
        case EQUAL: return "equal";
        }
        return null;
    }

    @JsonCreator
    public static AdditionalPriceType forValue(String value) throws IOException {
        if (value.equals("average")) return AVERAGE;
        if (value.equals("begin_with")) return BEGIN_WITH;
        if (value.equals("equal")) return EQUAL;
        throw new IOException("Cannot deserialize AdditionalPriceType");
    }
}
