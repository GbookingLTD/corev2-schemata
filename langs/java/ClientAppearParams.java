package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class ClientAppearParams {
    private TentacledAppointment appointment;
    private PurpleBusiness business;

    @JsonProperty("appointment")
    public TentacledAppointment getAppointment() { return appointment; }
    @JsonProperty("appointment")
    public void setAppointment(TentacledAppointment value) { this.appointment = value; }

    @JsonProperty("business")
    public PurpleBusiness getBusiness() { return business; }
    @JsonProperty("business")
    public void setBusiness(PurpleBusiness value) { this.business = value; }
}
