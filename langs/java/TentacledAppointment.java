package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class TentacledAppointment {
    private AppointmentClientAppear clientAppear;
    private String id;

    @JsonProperty("client_appear")
    public AppointmentClientAppear getClientAppear() { return clientAppear; }
    @JsonProperty("client_appear")
    public void setClientAppear(AppointmentClientAppear value) { this.clientAppear = value; }

    @JsonProperty("id")
    public String getID() { return id; }
    @JsonProperty("id")
    public void setID(String value) { this.id = value; }
}
