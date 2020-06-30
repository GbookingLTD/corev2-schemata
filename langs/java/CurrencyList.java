package ru.gbooking.apiv2;

import java.io.IOException;
import com.fasterxml.jackson.annotation.*;

/**
 * Аббревиатура валюты
 *
 * Аббревиатура валюты (например, RUB - рубль)
 */
public enum CurrencyList {
    CNY, EUR, GBP, HUF, ILS, KZT, RUB, UAH, USD, UZS;

    @JsonValue
    public String toValue() {
        switch (this) {
            case CNY: return "CNY";
            case EUR: return "EUR";
            case GBP: return "GBP";
            case HUF: return "HUF";
            case ILS: return "ILS";
            case KZT: return "KZT";
            case RUB: return "RUB";
            case UAH: return "UAH";
            case USD: return "USD";
            case UZS: return "UZS";
        }
        return null;
    }

    @JsonCreator
    public static CurrencyList forValue(String value) throws IOException {
        if (value.equals("CNY")) return CNY;
        if (value.equals("EUR")) return EUR;
        if (value.equals("GBP")) return GBP;
        if (value.equals("HUF")) return HUF;
        if (value.equals("ILS")) return ILS;
        if (value.equals("KZT")) return KZT;
        if (value.equals("RUB")) return RUB;
        if (value.equals("UAH")) return UAH;
        if (value.equals("USD")) return USD;
        if (value.equals("UZS")) return UZS;
        throw new IOException("Cannot deserialize CurrencyList");
    }
}
