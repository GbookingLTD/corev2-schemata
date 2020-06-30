package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class GetAppointmentsByClientV2 {
    private AppointmentGetAppointmentsByClientV2Request request;
    private AppointmentGetAppointmentsByClientV2Response response;

    @JsonProperty("request")
    public AppointmentGetAppointmentsByClientV2Request getRequest() { return request; }
    @JsonProperty("request")
    public void setRequest(AppointmentGetAppointmentsByClientV2Request value) { this.request = value; }

    @JsonProperty("response")
    public AppointmentGetAppointmentsByClientV2Response getResponse() { return response; }
    @JsonProperty("response")
    public void setResponse(AppointmentGetAppointmentsByClientV2Response value) { this.response = value; }
}
