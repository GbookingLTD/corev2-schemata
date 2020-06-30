package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class AdditionalClientAppear {
    private AppointmentClientAppear appear;
    private String clientID;

    @JsonProperty("appear")
    public AppointmentClientAppear getAppear() { return appear; }
    @JsonProperty("appear")
    public void setAppear(AppointmentClientAppear value) { this.appear = value; }

    @JsonProperty("clientID")
    public String getClientID() { return clientID; }
    @JsonProperty("clientID")
    public void setClientID(String value) { this.clientID = value; }
}
