package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class ConfirmAppointmentParams {
    private StickyAppointment appointment;
    private TentacledClient client;
    private PurpleContract contract;

    @JsonProperty("appointment")
    public StickyAppointment getAppointment() { return appointment; }
    @JsonProperty("appointment")
    public void setAppointment(StickyAppointment value) { this.appointment = value; }

    @JsonProperty("client")
    public TentacledClient getClient() { return client; }
    @JsonProperty("client")
    public void setClient(TentacledClient value) { this.client = value; }

    @JsonProperty("contract")
    public PurpleContract getContract() { return contract; }
    @JsonProperty("contract")
    public void setContract(PurpleContract value) { this.contract = value; }
}
