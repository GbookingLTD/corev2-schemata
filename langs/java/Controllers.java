package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class Controllers {
    private AppointmentController appointment;
    private BusinessController business;
    private ClientController client;
    private CracSlotsController cracSlots;

    @JsonProperty("Appointment")
    public AppointmentController getAppointment() { return appointment; }
    @JsonProperty("Appointment")
    public void setAppointment(AppointmentController value) { this.appointment = value; }

    @JsonProperty("Business")
    public BusinessController getBusiness() { return business; }
    @JsonProperty("Business")
    public void setBusiness(BusinessController value) { this.business = value; }

    @JsonProperty("Client")
    public ClientController getClient() { return client; }
    @JsonProperty("Client")
    public void setClient(ClientController value) { this.client = value; }

    @JsonProperty("CracSlots")
    public CracSlotsController getCracSlots() { return cracSlots; }
    @JsonProperty("CracSlots")
    public void setCracSlots(CracSlotsController value) { this.cracSlots = value; }
}
