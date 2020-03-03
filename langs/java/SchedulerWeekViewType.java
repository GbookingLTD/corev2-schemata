package ru.gbooking.apiv2;

import java.util.*;
import java.io.IOException;

public enum SchedulerWeekViewType {
    WEEK, WORK_WEEK;

    public String toValue() {
        switch (this) {
        case WEEK: return "week";
        case WORK_WEEK: return "workWeek";
        }
        return null;
    }

    public static SchedulerWeekViewType forValue(String value) throws IOException {
        if (value.equals("week")) return WEEK;
        if (value.equals("workWeek")) return WORK_WEEK;
        throw new IOException("Cannot deserialize SchedulerWeekViewType");
    }
}
