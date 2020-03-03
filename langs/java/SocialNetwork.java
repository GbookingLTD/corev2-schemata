package ru.gbooking.apiv2;

import java.util.*;
import java.io.IOException;

public enum SocialNetwork {
    FACEBOOK, GOOGLE, G_BOOKING, LINKED_IN, MAILRU, ODNOKLASSNIKI, TWITTER, V_KONTAKTE, YAHOO, YANDEX;

    public String toValue() {
        switch (this) {
        case FACEBOOK: return "Facebook";
        case GOOGLE: return "Google";
        case G_BOOKING: return "GBooking";
        case LINKED_IN: return "LinkedIn";
        case MAILRU: return "Mailru";
        case ODNOKLASSNIKI: return "Odnoklassniki";
        case TWITTER: return "Twitter";
        case V_KONTAKTE: return "VKontakte";
        case YAHOO: return "Yahoo";
        case YANDEX: return "Yandex";
        }
        return null;
    }

    public static SocialNetwork forValue(String value) throws IOException {
        if (value.equals("Facebook")) return FACEBOOK;
        if (value.equals("Google")) return GOOGLE;
        if (value.equals("GBooking")) return G_BOOKING;
        if (value.equals("LinkedIn")) return LINKED_IN;
        if (value.equals("Mailru")) return MAILRU;
        if (value.equals("Odnoklassniki")) return ODNOKLASSNIKI;
        if (value.equals("Twitter")) return TWITTER;
        if (value.equals("VKontakte")) return V_KONTAKTE;
        if (value.equals("Yahoo")) return YAHOO;
        if (value.equals("Yandex")) return YANDEX;
        throw new IOException("Cannot deserialize SocialNetwork");
    }
}
