package ru.gbooking.apiv2;

import java.util.*;
import java.io.IOException;
import com.fasterxml.jackson.annotation.*;

public enum TalkAnswer {
    NOT_IMPORTANT, NOT_TALK, TALK;

    @JsonValue
    public String toValue() {
        switch (this) {
        case NOT_IMPORTANT: return "NOT_IMPORTANT";
        case NOT_TALK: return "NOT_TALK";
        case TALK: return "TALK";
        }
        return null;
    }

    @JsonCreator
    public static TalkAnswer forValue(String value) throws IOException {
        if (value.equals("NOT_IMPORTANT")) return NOT_IMPORTANT;
        if (value.equals("NOT_TALK")) return NOT_TALK;
        if (value.equals("TALK")) return TALK;
        throw new IOException("Cannot deserialize TalkAnswer");
    }
}
