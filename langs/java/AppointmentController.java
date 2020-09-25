package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class AppointmentController {
    private CancelAppointmentByBusiness cancelAppointmentByBusiness;
    private CancelAppointmentByClient cancelAppointmentByClient;
    private ClientAppear clientAppear;
    private ClientConfirmAppointment clientConfirmAppointment;
    private ClientRemoveEmptyAppointment clientRemoveEmptyAppointment;
    private FinishAppointment finishAppointment;
    private GetAppointmentByFilter getAppointmentByFilter;
    private GetAppointmentByShowcase getAppointmentByShowcase;
    private GetAppointmentsByClientV2 getAppointmentsByClientV2;
    private GetAppointmentsByUser getAppointmentsByUser;
    private ReserveAppointment reserveAppointment;
    private StartAppointment startAppointment;

    @JsonProperty("cancel_appointment_by_business")
    public CancelAppointmentByBusiness getCancelAppointmentByBusiness() { return cancelAppointmentByBusiness; }
    @JsonProperty("cancel_appointment_by_business")
    public void setCancelAppointmentByBusiness(CancelAppointmentByBusiness value) { this.cancelAppointmentByBusiness = value; }

    @JsonProperty("cancel_appointment_by_client")
    public CancelAppointmentByClient getCancelAppointmentByClient() { return cancelAppointmentByClient; }
    @JsonProperty("cancel_appointment_by_client")
    public void setCancelAppointmentByClient(CancelAppointmentByClient value) { this.cancelAppointmentByClient = value; }

    @JsonProperty("client_appear")
    public ClientAppear getClientAppear() { return clientAppear; }
    @JsonProperty("client_appear")
    public void setClientAppear(ClientAppear value) { this.clientAppear = value; }

    @JsonProperty("client_confirm_appointment")
    public ClientConfirmAppointment getClientConfirmAppointment() { return clientConfirmAppointment; }
    @JsonProperty("client_confirm_appointment")
    public void setClientConfirmAppointment(ClientConfirmAppointment value) { this.clientConfirmAppointment = value; }

    @JsonProperty("client_remove_empty_appointment")
    public ClientRemoveEmptyAppointment getClientRemoveEmptyAppointment() { return clientRemoveEmptyAppointment; }
    @JsonProperty("client_remove_empty_appointment")
    public void setClientRemoveEmptyAppointment(ClientRemoveEmptyAppointment value) { this.clientRemoveEmptyAppointment = value; }

    @JsonProperty("finish_appointment")
    public FinishAppointment getFinishAppointment() { return finishAppointment; }
    @JsonProperty("finish_appointment")
    public void setFinishAppointment(FinishAppointment value) { this.finishAppointment = value; }

    @JsonProperty("get_appointment_by_filter")
    public GetAppointmentByFilter getGetAppointmentByFilter() { return getAppointmentByFilter; }
    @JsonProperty("get_appointment_by_filter")
    public void setGetAppointmentByFilter(GetAppointmentByFilter value) { this.getAppointmentByFilter = value; }

    @JsonProperty("get_appointment_by_showcase")
    public GetAppointmentByShowcase getGetAppointmentByShowcase() { return getAppointmentByShowcase; }
    @JsonProperty("get_appointment_by_showcase")
    public void setGetAppointmentByShowcase(GetAppointmentByShowcase value) { this.getAppointmentByShowcase = value; }

    @JsonProperty("get_appointments_by_client_v2")
    public GetAppointmentsByClientV2 getGetAppointmentsByClientV2() { return getAppointmentsByClientV2; }
    @JsonProperty("get_appointments_by_client_v2")
    public void setGetAppointmentsByClientV2(GetAppointmentsByClientV2 value) { this.getAppointmentsByClientV2 = value; }

    @JsonProperty("get_appointments_by_user")
    public GetAppointmentsByUser getGetAppointmentsByUser() { return getAppointmentsByUser; }
    @JsonProperty("get_appointments_by_user")
    public void setGetAppointmentsByUser(GetAppointmentsByUser value) { this.getAppointmentsByUser = value; }

    @JsonProperty("reserve_appointment")
    public ReserveAppointment getReserveAppointment() { return reserveAppointment; }
    @JsonProperty("reserve_appointment")
    public void setReserveAppointment(ReserveAppointment value) { this.reserveAppointment = value; }

    @JsonProperty("start_appointment")
    public StartAppointment getStartAppointment() { return startAppointment; }
    @JsonProperty("start_appointment")
    public void setStartAppointment(StartAppointment value) { this.startAppointment = value; }
}
