package ru.gbooking.apiv2;

import java.io.IOException;
import com.fasterxml.jackson.annotation.*;

public enum SchedulerWeekViewType {
    WEEK, WORK_WEEK;

    @JsonValue
    public String toValue() {
        switch (this) {
            case WEEK: return "week";
            case WORK_WEEK: return "workWeek";
        }
        return null;
    }

    @JsonCreator
    public static SchedulerWeekViewType forValue(String value) throws IOException {
        if (value.equals("week")) return WEEK;
        if (value.equals("workWeek")) return WORK_WEEK;
        throw new IOException("Cannot deserialize SchedulerWeekViewType");
    }
}
