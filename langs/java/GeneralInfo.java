package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class GeneralInfo {
    private String timezone;

    @JsonProperty("timezone")
    public String getTimezone() { return timezone; }
    @JsonProperty("timezone")
    public void setTimezone(String value) { this.timezone = value; }
}
