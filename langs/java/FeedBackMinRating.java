package ru.gbooking.apiv2;

import java.util.*;
import java.io.IOException;
import com.fasterxml.jackson.annotation.*;

public enum FeedBackMinRating {
    THE_1, THE_2, THE_3, THE_4, THE_5;

    @JsonValue
    public String toValue() {
        switch (this) {
        case THE_1: return "1";
        case THE_2: return "2";
        case THE_3: return "3";
        case THE_4: return "4";
        case THE_5: return "5";
        }
        return null;
    }

    @JsonCreator
    public static FeedBackMinRating forValue(String value) throws IOException {
        if (value.equals("1")) return THE_1;
        if (value.equals("2")) return THE_2;
        if (value.equals("3")) return THE_3;
        if (value.equals("4")) return THE_4;
        if (value.equals("5")) return THE_5;
        throw new IOException("Cannot deserialize FeedBackMinRating");
    }
}
