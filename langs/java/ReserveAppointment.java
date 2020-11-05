package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class ReserveAppointment {
    private AppointmentReserveAppointmentRequest request;
    private AppointmentReserveAppointmentResponse response;

    @JsonProperty("request")
    public AppointmentReserveAppointmentRequest getRequest() { return request; }
    @JsonProperty("request")
    public void setRequest(AppointmentReserveAppointmentRequest value) { this.request = value; }

    @JsonProperty("response")
    public AppointmentReserveAppointmentResponse getResponse() { return response; }
    @JsonProperty("response")
    public void setResponse(AppointmentReserveAppointmentResponse value) { this.response = value; }
}
