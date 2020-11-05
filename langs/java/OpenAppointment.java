package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class OpenAppointment {
    private AppointmentOpenAppointmentRequest request;
    private AppointmentOpenAppointmentResponse response;

    @JsonProperty("request")
    public AppointmentOpenAppointmentRequest getRequest() { return request; }
    @JsonProperty("request")
    public void setRequest(AppointmentOpenAppointmentRequest value) { this.request = value; }

    @JsonProperty("response")
    public AppointmentOpenAppointmentResponse getResponse() { return response; }
    @JsonProperty("response")
    public void setResponse(AppointmentOpenAppointmentResponse value) { this.response = value; }
}
