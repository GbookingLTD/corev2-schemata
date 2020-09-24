package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class GetAppointmentsByUser {
    private AppointmentGetAppointmentsByUserRequest request;
    private AppointmentGetAppointmentsByUserResponse response;

    @JsonProperty("request")
    public AppointmentGetAppointmentsByUserRequest getRequest() { return request; }
    @JsonProperty("request")
    public void setRequest(AppointmentGetAppointmentsByUserRequest value) { this.request = value; }

    @JsonProperty("response")
    public AppointmentGetAppointmentsByUserResponse getResponse() { return response; }
    @JsonProperty("response")
    public void setResponse(AppointmentGetAppointmentsByUserResponse value) { this.response = value; }
}
