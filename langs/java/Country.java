package ru.gbooking.apiv2;

import java.io.IOException;
import com.fasterxml.jackson.annotation.*;

public enum Country {
    AM, BLR, CH, DE, EMPTY, ES, FI, FR, GE, HU, IL, KZ, LI, LT, LV, RU, UA, UK, US, UZ;

    @JsonValue
    public String toValue() {
        switch (this) {
            case AM: return "AM";
            case BLR: return "BLR";
            case CH: return "CH";
            case DE: return "DE";
            case EMPTY: return "_";
            case ES: return "ES";
            case FI: return "FI";
            case FR: return "FR";
            case GE: return "GE";
            case HU: return "HU";
            case IL: return "IL";
            case KZ: return "KZ";
            case LI: return "LI";
            case LT: return "LT";
            case LV: return "LV";
            case RU: return "RU";
            case UA: return "UA";
            case UK: return "UK";
            case US: return "US";
            case UZ: return "UZ";
        }
        return null;
    }

    @JsonCreator
    public static Country forValue(String value) throws IOException {
        if (value.equals("AM")) return AM;
        if (value.equals("BLR")) return BLR;
        if (value.equals("CH")) return CH;
        if (value.equals("DE")) return DE;
        if (value.equals("_")) return EMPTY;
        if (value.equals("ES")) return ES;
        if (value.equals("FI")) return FI;
        if (value.equals("FR")) return FR;
        if (value.equals("GE")) return GE;
        if (value.equals("HU")) return HU;
        if (value.equals("IL")) return IL;
        if (value.equals("KZ")) return KZ;
        if (value.equals("LI")) return LI;
        if (value.equals("LT")) return LT;
        if (value.equals("LV")) return LV;
        if (value.equals("RU")) return RU;
        if (value.equals("UA")) return UA;
        if (value.equals("UK")) return UK;
        if (value.equals("US")) return US;
        if (value.equals("UZ")) return UZ;
        throw new IOException("Cannot deserialize Country");
    }
}
