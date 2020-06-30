package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class GetAppointmentByFilter {
    private AppointmentGetAppointmentByFilterRequest request;
    private AppointmentGetAppointmentByFilterResponse response;

    @JsonProperty("request")
    public AppointmentGetAppointmentByFilterRequest getRequest() { return request; }
    @JsonProperty("request")
    public void setRequest(AppointmentGetAppointmentByFilterRequest value) { this.request = value; }

    @JsonProperty("response")
    public AppointmentGetAppointmentByFilterResponse getResponse() { return response; }
    @JsonProperty("response")
    public void setResponse(AppointmentGetAppointmentByFilterResponse value) { this.response = value; }
}
