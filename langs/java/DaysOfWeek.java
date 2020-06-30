package ru.gbooking.apiv2;

import java.io.IOException;
import com.fasterxml.jackson.annotation.*;

public enum DaysOfWeek {
    FRI, MON, SAT, SUN, THU, TUE, WED;

    @JsonValue
    public String toValue() {
        switch (this) {
            case FRI: return "fri";
            case MON: return "mon";
            case SAT: return "sat";
            case SUN: return "sun";
            case THU: return "thu";
            case TUE: return "tue";
            case WED: return "wed";
        }
        return null;
    }

    @JsonCreator
    public static DaysOfWeek forValue(String value) throws IOException {
        if (value.equals("fri")) return FRI;
        if (value.equals("mon")) return MON;
        if (value.equals("sat")) return SAT;
        if (value.equals("sun")) return SUN;
        if (value.equals("thu")) return THU;
        if (value.equals("tue")) return TUE;
        if (value.equals("wed")) return WED;
        throw new IOException("Cannot deserialize DaysOfWeek");
    }
}
