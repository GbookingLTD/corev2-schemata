package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class ClientRemoveEmptyAppointment {
    private AppointmentClientRemoveEmptyAppointmentRequest request;
    private AppointmentClientRemoveEmptyAppointmentResponse response;

    @JsonProperty("request")
    public AppointmentClientRemoveEmptyAppointmentRequest getRequest() { return request; }
    @JsonProperty("request")
    public void setRequest(AppointmentClientRemoveEmptyAppointmentRequest value) { this.request = value; }

    @JsonProperty("response")
    public AppointmentClientRemoveEmptyAppointmentResponse getResponse() { return response; }
    @JsonProperty("response")
    public void setResponse(AppointmentClientRemoveEmptyAppointmentResponse value) { this.response = value; }
}
