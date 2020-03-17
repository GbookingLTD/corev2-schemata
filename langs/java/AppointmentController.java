package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class AppointmentController {
    private CancelAppointmentByBusiness cancelAppointmentByBusiness;
    private CancelAppointmentByClient cancelAppointmentByClient;
    private ClientConfirmAppointment clientConfirmAppointment;
    private ClientRemoveEmptyAppointment clientRemoveEmptyAppointment;
    private GetAppointmentByFilter getAppointmentByFilter;
    private ReserveAppointment reserveAppointment;

    @JsonProperty("cancel_appointment_by_business")
    public CancelAppointmentByBusiness getCancelAppointmentByBusiness() { return cancelAppointmentByBusiness; }
    @JsonProperty("cancel_appointment_by_business")
    public void setCancelAppointmentByBusiness(CancelAppointmentByBusiness value) { this.cancelAppointmentByBusiness = value; }

    @JsonProperty("cancel_appointment_by_client")
    public CancelAppointmentByClient getCancelAppointmentByClient() { return cancelAppointmentByClient; }
    @JsonProperty("cancel_appointment_by_client")
    public void setCancelAppointmentByClient(CancelAppointmentByClient value) { this.cancelAppointmentByClient = value; }

    @JsonProperty("client_confirm_appointment")
    public ClientConfirmAppointment getClientConfirmAppointment() { return clientConfirmAppointment; }
    @JsonProperty("client_confirm_appointment")
    public void setClientConfirmAppointment(ClientConfirmAppointment value) { this.clientConfirmAppointment = value; }

    @JsonProperty("client_remove_empty_appointment")
    public ClientRemoveEmptyAppointment getClientRemoveEmptyAppointment() { return clientRemoveEmptyAppointment; }
    @JsonProperty("client_remove_empty_appointment")
    public void setClientRemoveEmptyAppointment(ClientRemoveEmptyAppointment value) { this.clientRemoveEmptyAppointment = value; }

    @JsonProperty("get_appointment_by_filter")
    public GetAppointmentByFilter getGetAppointmentByFilter() { return getAppointmentByFilter; }
    @JsonProperty("get_appointment_by_filter")
    public void setGetAppointmentByFilter(GetAppointmentByFilter value) { this.getAppointmentByFilter = value; }

    @JsonProperty("reserve_appointment")
    public ReserveAppointment getReserveAppointment() { return reserveAppointment; }
    @JsonProperty("reserve_appointment")
    public void setReserveAppointment(ReserveAppointment value) { this.reserveAppointment = value; }
}
