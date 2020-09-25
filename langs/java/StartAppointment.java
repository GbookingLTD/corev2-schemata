package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class StartAppointment {
    private AppointmentStartAppointmentRequest request;
    private AppointmentStartAppointmentResponse response;

    @JsonProperty("request")
    public AppointmentStartAppointmentRequest getRequest() { return request; }
    @JsonProperty("request")
    public void setRequest(AppointmentStartAppointmentRequest value) { this.request = value; }

    @JsonProperty("response")
    public AppointmentStartAppointmentResponse getResponse() { return response; }
    @JsonProperty("response")
    public void setResponse(AppointmentStartAppointmentResponse value) { this.response = value; }
}
