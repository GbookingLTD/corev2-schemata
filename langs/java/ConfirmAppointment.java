package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class ConfirmAppointment {
    private TentacledAppointment appointment;
    private TentacledClient client;
    private Object business;

    @JsonProperty("appointment")
    public TentacledAppointment getAppointment() { return appointment; }
    @JsonProperty("appointment")
    public void setAppointment(TentacledAppointment value) { this.appointment = value; }

    @JsonProperty("client")
    public TentacledClient getClient() { return client; }
    @JsonProperty("client")
    public void setClient(TentacledClient value) { this.client = value; }

    @JsonProperty("business")
    public Object getBusiness() { return business; }
    @JsonProperty("business")
    public void setBusiness(Object value) { this.business = value; }
}
