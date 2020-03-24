package ru.gbooking.apiv2;

import java.util.*;
import java.io.IOException;
import com.fasterxml.jackson.annotation.*;

public enum FluffyPaymentProvider {
    CLOUDPAYMENTS, DELTA_PROCESSING, DISABLE, YANDEX_MONEY;

    @JsonValue
    public String toValue() {
        switch (this) {
        case CLOUDPAYMENTS: return "cloudpayments";
        case DELTA_PROCESSING: return "deltaProcessing";
        case DISABLE: return "DISABLE";
        case YANDEX_MONEY: return "yandexMoney";
        }
        return null;
    }

    @JsonCreator
    public static FluffyPaymentProvider forValue(String value) throws IOException {
        if (value.equals("cloudpayments")) return CLOUDPAYMENTS;
        if (value.equals("deltaProcessing")) return DELTA_PROCESSING;
        if (value.equals("DISABLE")) return DISABLE;
        if (value.equals("yandexMoney")) return YANDEX_MONEY;
        throw new IOException("Cannot deserialize FluffyPaymentProvider");
    }
}
