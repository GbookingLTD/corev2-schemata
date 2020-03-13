package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class RemoveEmptyAppointment {
    private PurpleAppointment appointment;
    private PurpleBusiness business;

    @JsonProperty("appointment")
    public PurpleAppointment getAppointment() { return appointment; }
    @JsonProperty("appointment")
    public void setAppointment(PurpleAppointment value) { this.appointment = value; }

    @JsonProperty("business")
    public PurpleBusiness getBusiness() { return business; }
    @JsonProperty("business")
    public void setBusiness(PurpleBusiness value) { this.business = value; }
}