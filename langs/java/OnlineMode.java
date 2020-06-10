package ru.gbooking.apiv2;

import java.util.*;
import java.io.IOException;
import com.fasterxml.jackson.annotation.*;

public enum OnlineMode {
    ONCALL_ONLINE, PLAN_CLINIC, PLAN_CLINIC_ONLINE, PLAN_ONLINE;

    @JsonValue
    public String toValue() {
        switch (this) {
        case ONCALL_ONLINE: return "ONCALL_ONLINE";
        case PLAN_CLINIC: return "PLAN_CLINIC";
        case PLAN_CLINIC_ONLINE: return "PLAN_CLINIC_ONLINE";
        case PLAN_ONLINE: return "PLAN_ONLINE";
        }
        return null;
    }

    @JsonCreator
    public static OnlineMode forValue(String value) throws IOException {
        if (value.equals("ONCALL_ONLINE")) return ONCALL_ONLINE;
        if (value.equals("PLAN_CLINIC")) return PLAN_CLINIC;
        if (value.equals("PLAN_CLINIC_ONLINE")) return PLAN_CLINIC_ONLINE;
        if (value.equals("PLAN_ONLINE")) return PLAN_ONLINE;
        throw new IOException("Cannot deserialize OnlineMode");
    }
}
