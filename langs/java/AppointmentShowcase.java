package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class AppointmentShowcase {
    private String businessID;

    @JsonProperty("businessID")
    public String getBusinessID() { return businessID; }
    @JsonProperty("businessID")
    public void setBusinessID(String value) { this.businessID = value; }
}
