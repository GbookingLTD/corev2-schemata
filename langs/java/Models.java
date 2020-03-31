package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class Models {
    private AppointmentElement appointment;
    private BusinessClass business;
    private ClientClass client;

    @JsonProperty("Appointment")
    public AppointmentElement getAppointment() { return appointment; }
    @JsonProperty("Appointment")
    public void setAppointment(AppointmentElement value) { this.appointment = value; }

    @JsonProperty("Business")
    public BusinessClass getBusiness() { return business; }
    @JsonProperty("Business")
    public void setBusiness(BusinessClass value) { this.business = value; }

    @JsonProperty("Client")
    public ClientClass getClient() { return client; }
    @JsonProperty("Client")
    public void setClient(ClientClass value) { this.client = value; }
}
