package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class AppointmentController {
    private ClientRemoveEmptyAppointment clientRemoveEmptyAppointment;
    private ReserveAppointment reserveAppointment;

    @JsonProperty("client_remove_empty_appointment")
    public ClientRemoveEmptyAppointment getClientRemoveEmptyAppointment() { return clientRemoveEmptyAppointment; }
    @JsonProperty("client_remove_empty_appointment")
    public void setClientRemoveEmptyAppointment(ClientRemoveEmptyAppointment value) { this.clientRemoveEmptyAppointment = value; }

    @JsonProperty("reserve_appointment")
    public ReserveAppointment getReserveAppointment() { return reserveAppointment; }
    @JsonProperty("reserve_appointment")
    public void setReserveAppointment(ReserveAppointment value) { this.reserveAppointment = value; }
}
