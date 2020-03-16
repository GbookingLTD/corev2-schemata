package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class ClientConfirmAppointment {
    private AppointmentClientConfirmAppointmentRequest request;
    private AppointmentClientConfirmAppointmentResponse response;

    @JsonProperty("request")
    public AppointmentClientConfirmAppointmentRequest getRequest() { return request; }
    @JsonProperty("request")
    public void setRequest(AppointmentClientConfirmAppointmentRequest value) { this.request = value; }

    @JsonProperty("response")
    public AppointmentClientConfirmAppointmentResponse getResponse() { return response; }
    @JsonProperty("response")
    public void setResponse(AppointmentClientConfirmAppointmentResponse value) { this.response = value; }
}
