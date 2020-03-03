package ru.gbooking.apiv2;

import java.util.*;
import java.io.IOException;

public enum PaymentProvider {
    DELTA_PROCESSING, DISABLE, YANDEX_MONEY;

    public String toValue() {
        switch (this) {
        case DELTA_PROCESSING: return "deltaProcessing";
        case DISABLE: return "DISABLE";
        case YANDEX_MONEY: return "yandexMoney";
        }
        return null;
    }

    public static PaymentProvider forValue(String value) throws IOException {
        if (value.equals("deltaProcessing")) return DELTA_PROCESSING;
        if (value.equals("DISABLE")) return DISABLE;
        if (value.equals("yandexMoney")) return YANDEX_MONEY;
        throw new IOException("Cannot deserialize PaymentProvider");
    }
}
