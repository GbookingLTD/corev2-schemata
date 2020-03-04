package ru.gbooking.apiv2;

import java.util.*;
import java.io.IOException;
import com.fasterxml.jackson.annotation.*;

public enum Field {
    EMAIL, NAME, SURNAME;

    @JsonValue
    public String toValue() {
        switch (this) {
        case EMAIL: return "email";
        case NAME: return "name";
        case SURNAME: return "surname";
        }
        return null;
    }

    @JsonCreator
    public static Field forValue(String value) throws IOException {
        if (value.equals("email")) return EMAIL;
        if (value.equals("name")) return NAME;
        if (value.equals("surname")) return SURNAME;
        throw new IOException("Cannot deserialize Field");
    }
}
