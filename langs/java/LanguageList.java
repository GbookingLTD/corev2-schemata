package ru.gbooking.apiv2;

import java.util.*;
import java.io.IOException;
import com.fasterxml.jackson.annotation.*;

public enum LanguageList {
    AM_AM, DE_DE, EE_EE, EN_US, ES_ES, FI_FI, FR_FR, GE_GE, HE_IL, HU_HU, LT_LT, LV_LV, RU_RU, UZ_UZ, ZH_CN;

    @JsonValue
    public String toValue() {
        switch (this) {
        case AM_AM: return "am-am";
        case DE_DE: return "de-de";
        case EE_EE: return "ee-ee";
        case EN_US: return "en-us";
        case ES_ES: return "es-es";
        case FI_FI: return "fi-fi";
        case FR_FR: return "fr-fr";
        case GE_GE: return "ge-ge";
        case HE_IL: return "he-il";
        case HU_HU: return "hu-hu";
        case LT_LT: return "lt-lt";
        case LV_LV: return "lv-lv";
        case RU_RU: return "ru-ru";
        case UZ_UZ: return "uz-uz";
        case ZH_CN: return "zh-cn";
        }
        return null;
    }

    @JsonCreator
    public static LanguageList forValue(String value) throws IOException {
        if (value.equals("am-am")) return AM_AM;
        if (value.equals("de-de")) return DE_DE;
        if (value.equals("ee-ee")) return EE_EE;
        if (value.equals("en-us")) return EN_US;
        if (value.equals("es-es")) return ES_ES;
        if (value.equals("fi-fi")) return FI_FI;
        if (value.equals("fr-fr")) return FR_FR;
        if (value.equals("ge-ge")) return GE_GE;
        if (value.equals("he-il")) return HE_IL;
        if (value.equals("hu-hu")) return HU_HU;
        if (value.equals("lt-lt")) return LT_LT;
        if (value.equals("lv-lv")) return LV_LV;
        if (value.equals("ru-ru")) return RU_RU;
        if (value.equals("uz-uz")) return UZ_UZ;
        if (value.equals("zh-cn")) return ZH_CN;
        throw new IOException("Cannot deserialize LanguageList");
    }
}
