package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class FinishAppointment {
    private AppointmentFinishAppointmentRequest request;
    private AppointmentFinishAppointmentResponse response;

    @JsonProperty("request")
    public AppointmentFinishAppointmentRequest getRequest() { return request; }
    @JsonProperty("request")
    public void setRequest(AppointmentFinishAppointmentRequest value) { this.request = value; }

    @JsonProperty("response")
    public AppointmentFinishAppointmentResponse getResponse() { return response; }
    @JsonProperty("response")
    public void setResponse(AppointmentFinishAppointmentResponse value) { this.response = value; }
}
