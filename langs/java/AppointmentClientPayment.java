package ru.gbooking.apiv2;

import java.io.IOException;
import com.fasterxml.jackson.annotation.*;

public enum AppointmentClientPayment {
    NONE, NO_PAYMENT, YES_PAYED_FULL, YES_PAYED_ONLINE, YES_PAYED_PART;

    @JsonValue
    public String toValue() {
        switch (this) {
            case NONE: return "NONE";
            case NO_PAYMENT: return "NO_PAYMENT";
            case YES_PAYED_FULL: return "YES_PAYED_FULL";
            case YES_PAYED_ONLINE: return "YES_PAYED_ONLINE";
            case YES_PAYED_PART: return "YES_PAYED_PART";
        }
        return null;
    }

    @JsonCreator
    public static AppointmentClientPayment forValue(String value) throws IOException {
        if (value.equals("NONE")) return NONE;
        if (value.equals("NO_PAYMENT")) return NO_PAYMENT;
        if (value.equals("YES_PAYED_FULL")) return YES_PAYED_FULL;
        if (value.equals("YES_PAYED_ONLINE")) return YES_PAYED_ONLINE;
        if (value.equals("YES_PAYED_PART")) return YES_PAYED_PART;
        throw new IOException("Cannot deserialize AppointmentClientPayment");
    }
}
