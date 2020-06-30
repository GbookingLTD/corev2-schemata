package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class AppointmentCancelAppointmentByClientRequestParams {
    private FluffyAppointment appointment;
    private FluffyClient client;

    @JsonProperty("appointment")
    public FluffyAppointment getAppointment() { return appointment; }
    @JsonProperty("appointment")
    public void setAppointment(FluffyAppointment value) { this.appointment = value; }

    @JsonProperty("client")
    public FluffyClient getClient() { return client; }
    @JsonProperty("client")
    public void setClient(FluffyClient value) { this.client = value; }
}
