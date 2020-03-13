package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class AdditionalClientStatus {
    private String clientID;
    private AppointmentStatus status;

    @JsonProperty("clientID")
    public String getClientID() { return clientID; }
    @JsonProperty("clientID")
    public void setClientID(String value) { this.clientID = value; }

    @JsonProperty("status")
    public AppointmentStatus getStatus() { return status; }
    @JsonProperty("status")
    public void setStatus(AppointmentStatus value) { this.status = value; }
}
