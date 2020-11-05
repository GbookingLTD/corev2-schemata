package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class StartAppointmentParams {
    private CunningAppointment appointment;
    private MagentaBusiness business;

    @JsonProperty("appointment")
    public CunningAppointment getAppointment() { return appointment; }
    @JsonProperty("appointment")
    public void setAppointment(CunningAppointment value) { this.appointment = value; }

    @JsonProperty("business")
    public MagentaBusiness getBusiness() { return business; }
    @JsonProperty("business")
    public void setBusiness(MagentaBusiness value) { this.business = value; }
}
