package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class FinishAppointmentParams {
    private IndecentAppointment appointment;
    private TentacledBusiness business;

    @JsonProperty("appointment")
    public IndecentAppointment getAppointment() { return appointment; }
    @JsonProperty("appointment")
    public void setAppointment(IndecentAppointment value) { this.appointment = value; }

    @JsonProperty("business")
    public TentacledBusiness getBusiness() { return business; }
    @JsonProperty("business")
    public void setBusiness(TentacledBusiness value) { this.business = value; }
}
