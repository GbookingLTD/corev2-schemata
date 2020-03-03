package ru.gbooking.apiv2;

import java.util.*;
import java.io.IOException;

/**
 * month - по дням месяца (1-е число каждого месяца - нечётно), week - по дням недели
 * (понедельник считается нечётным)
 */
public enum StartPeriod {
    MONTH, WEEK;

    public String toValue() {
        switch (this) {
        case MONTH: return "month";
        case WEEK: return "week";
        }
        return null;
    }

    public static StartPeriod forValue(String value) throws IOException {
        if (value.equals("month")) return MONTH;
        if (value.equals("week")) return WEEK;
        throw new IOException("Cannot deserialize StartPeriod");
    }
}
