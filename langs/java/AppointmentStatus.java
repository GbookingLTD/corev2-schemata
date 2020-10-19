package ru.gbooking.apiv2;

import java.io.IOException;
import com.fasterxml.jackson.annotation.*;

public enum AppointmentStatus {
    ACTIVE, CANCELLED_BY_ADMIN, CANCELLED_BY_BUSINESS, CANCELLED_BY_CLIENT, CONFIRMED_BY_ADMIN, CONFIRMED_BY_BUSINESS, CONFIRMED_BY_CLIENT, CONFIRMED_MOVED, DENIED, DONE, TENTATIVE, TIMED_OUT;

    @JsonValue
    public String toValue() {
        switch (this) {
            case ACTIVE: return "ACTIVE";
            case CANCELLED_BY_ADMIN: return "CANCELLED_BY_ADMIN";
            case CANCELLED_BY_BUSINESS: return "CANCELLED_BY_BUSINESS";
            case CANCELLED_BY_CLIENT: return "CANCELLED_BY_CLIENT";
            case CONFIRMED_BY_ADMIN: return "CONFIRMED_BY_ADMIN";
            case CONFIRMED_BY_BUSINESS: return "CONFIRMED_BY_BUSINESS";
            case CONFIRMED_BY_CLIENT: return "CONFIRMED_BY_CLIENT";
            case CONFIRMED_MOVED: return "CONFIRMED_MOVED";
            case DENIED: return "DENIED";
            case DONE: return "DONE";
            case TENTATIVE: return "TENTATIVE";
            case TIMED_OUT: return "TIMED_OUT";
        }
        return null;
    }

    @JsonCreator
    public static AppointmentStatus forValue(String value) throws IOException {
        if (value.equals("ACTIVE")) return ACTIVE;
        if (value.equals("CANCELLED_BY_ADMIN")) return CANCELLED_BY_ADMIN;
        if (value.equals("CANCELLED_BY_BUSINESS")) return CANCELLED_BY_BUSINESS;
        if (value.equals("CANCELLED_BY_CLIENT")) return CANCELLED_BY_CLIENT;
        if (value.equals("CONFIRMED_BY_ADMIN")) return CONFIRMED_BY_ADMIN;
        if (value.equals("CONFIRMED_BY_BUSINESS")) return CONFIRMED_BY_BUSINESS;
        if (value.equals("CONFIRMED_BY_CLIENT")) return CONFIRMED_BY_CLIENT;
        if (value.equals("CONFIRMED_MOVED")) return CONFIRMED_MOVED;
        if (value.equals("DENIED")) return DENIED;
        if (value.equals("DONE")) return DONE;
        if (value.equals("TENTATIVE")) return TENTATIVE;
        if (value.equals("TIMED_OUT")) return TIMED_OUT;
        throw new IOException("Cannot deserialize AppointmentStatus");
    }
}
