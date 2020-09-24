package ru.gbooking.apiv2;

import java.util.*;
import java.io.IOException;
import com.fasterxml.jackson.annotation.*;

public enum InvoiceProvider {
    DISABLE, ICOUNT;

    @JsonValue
    public String toValue() {
        switch (this) {
        case DISABLE: return "DISABLE";
        case ICOUNT: return "icount";
        }
        return null;
    }

    @JsonCreator
    public static InvoiceProvider forValue(String value) throws IOException {
        if (value.equals("DISABLE")) return DISABLE;
        if (value.equals("icount")) return ICOUNT;
        throw new IOException("Cannot deserialize InvoiceProvider");
    }
}
