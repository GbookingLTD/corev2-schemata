package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class AppointmentCancelAppointmentByBusinessRequestParams {
    private PurpleAppointment appointment;
    private PurpleClient client;
    private Object business;

    @JsonProperty("appointment")
    public PurpleAppointment getAppointment() { return appointment; }
    @JsonProperty("appointment")
    public void setAppointment(PurpleAppointment value) { this.appointment = value; }

    @JsonProperty("client")
    public PurpleClient getClient() { return client; }
    @JsonProperty("client")
    public void setClient(PurpleClient value) { this.client = value; }

    @JsonProperty("business")
    public Object getBusiness() { return business; }
    @JsonProperty("business")
    public void setBusiness(Object value) { this.business = value; }
}
