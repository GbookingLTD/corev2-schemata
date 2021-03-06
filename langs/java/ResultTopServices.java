package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;
import java.util.List;

public class ResultTopServices {
    private List<String> services;
    private boolean status;

    @JsonProperty("services")
    public List<String> getServices() { return services; }
    @JsonProperty("services")
    public void setServices(List<String> value) { this.services = value; }

    @JsonProperty("status")
    public boolean getStatus() { return status; }
    @JsonProperty("status")
    public void setStatus(boolean value) { this.status = value; }
}
