package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class ClientAppear {
    private AppointmentClientAppearRequest request;
    private AppointmentClientAppearResponse response;

    @JsonProperty("request")
    public AppointmentClientAppearRequest getRequest() { return request; }
    @JsonProperty("request")
    public void setRequest(AppointmentClientAppearRequest value) { this.request = value; }

    @JsonProperty("response")
    public AppointmentClientAppearResponse getResponse() { return response; }
    @JsonProperty("response")
    public void setResponse(AppointmentClientAppearResponse value) { this.response = value; }
}
