package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class CancelAppointmentByClient {
    private AppointmentCancelAppointmentByClientRequest request;
    private AppointmentCancelAppointmentByClientResponse response;

    @JsonProperty("request")
    public AppointmentCancelAppointmentByClientRequest getRequest() { return request; }
    @JsonProperty("request")
    public void setRequest(AppointmentCancelAppointmentByClientRequest value) { this.request = value; }

    @JsonProperty("response")
    public AppointmentCancelAppointmentByClientResponse getResponse() { return response; }
    @JsonProperty("response")
    public void setResponse(AppointmentCancelAppointmentByClientResponse value) { this.response = value; }
}
