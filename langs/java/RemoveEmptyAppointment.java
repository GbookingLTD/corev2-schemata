package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class RemoveEmptyAppointment {
    private IndigoAppointment appointment;
    private FluffyBusiness business;

    @JsonProperty("appointment")
    public IndigoAppointment getAppointment() { return appointment; }
    @JsonProperty("appointment")
    public void setAppointment(IndigoAppointment value) { this.appointment = value; }

    @JsonProperty("business")
    public FluffyBusiness getBusiness() { return business; }
    @JsonProperty("business")
    public void setBusiness(FluffyBusiness value) { this.business = value; }
}
