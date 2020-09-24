package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class ParamsClass {
    private PurpleAppointment appointment;
    private PurpleClient client;

    @JsonProperty("appointment")
    public PurpleAppointment getAppointment() { return appointment; }
    @JsonProperty("appointment")
    public void setAppointment(PurpleAppointment value) { this.appointment = value; }

    @JsonProperty("client")
    public PurpleClient getClient() { return client; }
    @JsonProperty("client")
    public void setClient(PurpleClient value) { this.client = value; }
}
