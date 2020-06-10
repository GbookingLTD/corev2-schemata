package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class InfoTopServices {
    private List<Object> services;
    private String status;

    @JsonProperty("services")
    public List<Object> getServices() { return services; }
    @JsonProperty("services")
    public void setServices(List<Object> value) { this.services = value; }

    @JsonProperty("status")
    public String getStatus() { return status; }
    @JsonProperty("status")
    public void setStatus(String value) { this.status = value; }
}
