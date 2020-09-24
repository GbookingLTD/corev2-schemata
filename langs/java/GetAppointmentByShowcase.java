package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class GetAppointmentByShowcase {
    private AppointmentGetAppointmentByShowcaseRequest request;
    private AppointmentGetAppointmentByShowcaseResponse response;

    @JsonProperty("request")
    public AppointmentGetAppointmentByShowcaseRequest getRequest() { return request; }
    @JsonProperty("request")
    public void setRequest(AppointmentGetAppointmentByShowcaseRequest value) { this.request = value; }

    @JsonProperty("response")
    public AppointmentGetAppointmentByShowcaseResponse getResponse() { return response; }
    @JsonProperty("response")
    public void setResponse(AppointmentGetAppointmentByShowcaseResponse value) { this.response = value; }
}
