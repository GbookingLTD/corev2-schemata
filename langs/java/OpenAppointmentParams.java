package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class OpenAppointmentParams {
    private HilariousAppointment appointment;
    private AmbitiousBusiness business;

    @JsonProperty("appointment")
    public HilariousAppointment getAppointment() { return appointment; }
    @JsonProperty("appointment")
    public void setAppointment(HilariousAppointment value) { this.appointment = value; }

    @JsonProperty("business")
    public AmbitiousBusiness getBusiness() { return business; }
    @JsonProperty("business")
    public void setBusiness(AmbitiousBusiness value) { this.business = value; }
}
