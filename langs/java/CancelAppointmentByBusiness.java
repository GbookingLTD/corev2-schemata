package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class CancelAppointmentByBusiness {
    private AppointmentCancelAppointmentByBusinessRequest request;
    private AppointmentCancelAppointmentByBusinessResponse response;

    @JsonProperty("request")
    public AppointmentCancelAppointmentByBusinessRequest getRequest() { return request; }
    @JsonProperty("request")
    public void setRequest(AppointmentCancelAppointmentByBusinessRequest value) { this.request = value; }

    @JsonProperty("response")
    public AppointmentCancelAppointmentByBusinessResponse getResponse() { return response; }
    @JsonProperty("response")
    public void setResponse(AppointmentCancelAppointmentByBusinessResponse value) { this.response = value; }
}
