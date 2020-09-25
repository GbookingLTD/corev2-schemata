package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class StartAppointmentParams {
    private AmbitiousAppointment appointment;
    private CunningBusiness business;

    @JsonProperty("appointment")
    public AmbitiousAppointment getAppointment() { return appointment; }
    @JsonProperty("appointment")
    public void setAppointment(AmbitiousAppointment value) { this.appointment = value; }

    @JsonProperty("business")
    public CunningBusiness getBusiness() { return business; }
    @JsonProperty("business")
    public void setBusiness(CunningBusiness value) { this.business = value; }
}
