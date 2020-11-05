package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class FaxElement {
    private String areaCode;
    private String countryCode;
    private String number;

    @JsonProperty("area_code")
    public String getAreaCode() { return areaCode; }
    @JsonProperty("area_code")
    public void setAreaCode(String value) { this.areaCode = value; }

    @JsonProperty("country_code")
    public String getCountryCode() { return countryCode; }
    @JsonProperty("country_code")
    public void setCountryCode(String value) { this.countryCode = value; }

    @JsonProperty("number")
    public String getNumber() { return number; }
    @JsonProperty("number")
    public void setNumber(String value) { this.number = value; }
}
