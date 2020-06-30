package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class IntegrationData {
    private String extraID;

    @JsonProperty("extraId")
    public String getExtraID() { return extraID; }
    @JsonProperty("extraId")
    public void setExtraID(String value) { this.extraID = value; }
}
