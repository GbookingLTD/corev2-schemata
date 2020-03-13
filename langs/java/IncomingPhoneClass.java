package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class IncomingPhoneClass {
    private String areaCode;
    private String countryCode;
    private String number;

    @JsonProperty("areaCode")
    public String getAreaCode() { return areaCode; }
    @JsonProperty("areaCode")
    public void setAreaCode(String value) { this.areaCode = value; }

    @JsonProperty("countryCode")
    public String getCountryCode() { return countryCode; }
    @JsonProperty("countryCode")
    public void setCountryCode(String value) { this.countryCode = value; }

    @JsonProperty("number")
    public String getNumber() { return number; }
    @JsonProperty("number")
    public void setNumber(String value) { this.number = value; }
}
