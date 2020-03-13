package ru.gbooking.apiv2;

import java.util.*;
import java.io.IOException;
import com.fasterxml.jackson.annotation.*;

public enum ComplaintStatus {
    CHECKING, CLOSED, ENTERED, INVALID, INVESTIGATION, NOT_ENTERED;

    @JsonValue
    public String toValue() {
        switch (this) {
        case CHECKING: return "CHECKING";
        case CLOSED: return "CLOSED";
        case ENTERED: return "ENTERED";
        case INVALID: return "INVALID";
        case INVESTIGATION: return "INVESTIGATION";
        case NOT_ENTERED: return "NOT_ENTERED";
        }
        return null;
    }

    @JsonCreator
    public static ComplaintStatus forValue(String value) throws IOException {
        if (value.equals("CHECKING")) return CHECKING;
        if (value.equals("CLOSED")) return CLOSED;
        if (value.equals("ENTERED")) return ENTERED;
        if (value.equals("INVALID")) return INVALID;
        if (value.equals("INVESTIGATION")) return INVESTIGATION;
        if (value.equals("NOT_ENTERED")) return NOT_ENTERED;
        throw new IOException("Cannot deserialize ComplaintStatus");
    }
}
