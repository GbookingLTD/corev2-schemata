package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class ConfirmAppointment {
    private StickyAppointment appointment;
    private TentacledClient client;

    @JsonProperty("appointment")
    public StickyAppointment getAppointment() { return appointment; }
    @JsonProperty("appointment")
    public void setAppointment(StickyAppointment value) { this.appointment = value; }

    @JsonProperty("client")
    public TentacledClient getClient() { return client; }
    @JsonProperty("client")
    public void setClient(TentacledClient value) { this.client = value; }
}
