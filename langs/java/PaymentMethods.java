package ru.gbooking.apiv2;

import java.io.IOException;
import com.fasterxml.jackson.annotation.*;

public enum PaymentMethods {
    AMEX, MASTERCARD, MONEY_BOOKERS, PAY_PAL, VISA;

    @JsonValue
    public String toValue() {
        switch (this) {
            case AMEX: return "Amex";
            case MASTERCARD: return "Mastercard";
            case MONEY_BOOKERS: return "MoneyBookers";
            case PAY_PAL: return "PayPal";
            case VISA: return "Visa";
        }
        return null;
    }

    @JsonCreator
    public static PaymentMethods forValue(String value) throws IOException {
        if (value.equals("Amex")) return AMEX;
        if (value.equals("Mastercard")) return MASTERCARD;
        if (value.equals("MoneyBookers")) return MONEY_BOOKERS;
        if (value.equals("PayPal")) return PAY_PAL;
        if (value.equals("Visa")) return VISA;
        throw new IOException("Cannot deserialize PaymentMethods");
    }
}
