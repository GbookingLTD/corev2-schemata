package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class TopServicesProperties {
    private BeijingPigeon status;
    private BeijingPigeon services;

    @JsonProperty("status")
    public BeijingPigeon getStatus() { return status; }
    @JsonProperty("status")
    public void setStatus(BeijingPigeon value) { this.status = value; }

    @JsonProperty("services")
    public BeijingPigeon getServices() { return services; }
    @JsonProperty("services")
    public void setServices(BeijingPigeon value) { this.services = value; }
}
