package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class Models {
    private AppointmentUnion appointment;
    private ResultBusiness business;
    private Client client;

    @JsonProperty("Appointment")
    public AppointmentUnion getAppointment() { return appointment; }
    @JsonProperty("Appointment")
    public void setAppointment(AppointmentUnion value) { this.appointment = value; }

    @JsonProperty("Business")
    public ResultBusiness getBusiness() { return business; }
    @JsonProperty("Business")
    public void setBusiness(ResultBusiness value) { this.business = value; }

    @JsonProperty("Client")
    public Client getClient() { return client; }
    @JsonProperty("Client")
    public void setClient(Client value) { this.client = value; }
}
