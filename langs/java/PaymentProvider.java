package ru.gbooking.apiv2;

import java.io.IOException;
import com.fasterxml.jackson.annotation.*;

public enum PaymentProvider {
    CLOUDPAYMENTS, DELTA_PROCESSING, DISABLE, PELECARD, YANDEX_MONEY, YANDEX_MONEYV3;

    @JsonValue
    public String toValue() {
        switch (this) {
            case CLOUDPAYMENTS: return "cloudpayments";
            case DELTA_PROCESSING: return "deltaProcessing";
            case DISABLE: return "DISABLE";
            case PELECARD: return "pelecard";
            case YANDEX_MONEY: return "yandexMoney";
            case YANDEX_MONEYV3: return "yandexMoneyv3";
        }
        return null;
    }

    @JsonCreator
    public static PaymentProvider forValue(String value) throws IOException {
        if (value.equals("cloudpayments")) return CLOUDPAYMENTS;
        if (value.equals("deltaProcessing")) return DELTA_PROCESSING;
        if (value.equals("DISABLE")) return DISABLE;
        if (value.equals("pelecard")) return PELECARD;
        if (value.equals("yandexMoney")) return YANDEX_MONEY;
        if (value.equals("yandexMoneyv3")) return YANDEX_MONEYV3;
        throw new IOException("Cannot deserialize PaymentProvider");
    }
}
