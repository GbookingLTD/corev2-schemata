package ru.gbooking.apiv2;

import java.util.*;
import java.io.IOException;

public enum UseDirectScheduleRead {
    ALL, AUTHENTICATED, GUEST, NONE;

    public String toValue() {
        switch (this) {
        case ALL: return "ALL";
        case AUTHENTICATED: return "AUTHENTICATED";
        case GUEST: return "GUEST";
        case NONE: return "NONE";
        }
        return null;
    }

    public static UseDirectScheduleRead forValue(String value) throws IOException {
        if (value.equals("ALL")) return ALL;
        if (value.equals("AUTHENTICATED")) return AUTHENTICATED;
        if (value.equals("GUEST")) return GUEST;
        if (value.equals("NONE")) return NONE;
        throw new IOException("Cannot deserialize UseDirectScheduleRead");
    }
}
