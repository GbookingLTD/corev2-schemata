package ru.gbooking.apiv2;

import java.util.*;
import java.io.IOException;

public enum DateLimitType {
    ALL_DATES, FROM_DATE, RANGE_DATES, TO_DATE;

    public String toValue() {
        switch (this) {
        case ALL_DATES: return "all_dates";
        case FROM_DATE: return "from_date";
        case RANGE_DATES: return "range_dates";
        case TO_DATE: return "to_date";
        }
        return null;
    }

    public static DateLimitType forValue(String value) throws IOException {
        if (value.equals("all_dates")) return ALL_DATES;
        if (value.equals("from_date")) return FROM_DATE;
        if (value.equals("range_dates")) return RANGE_DATES;
        if (value.equals("to_date")) return TO_DATE;
        throw new IOException("Cannot deserialize DateLimitType");
    }
}
