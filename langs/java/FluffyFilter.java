package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class FluffyFilter {
    private String appointmentID;
    private FluffyCreated created;
    private String end;
    private List<String> services;
    private Boolean skipUpdated;
    private String start;
    private List<String> workers;

    @JsonProperty("appointmentId")
    public String getAppointmentID() { return appointmentID; }
    @JsonProperty("appointmentId")
    public void setAppointmentID(String value) { this.appointmentID = value; }

    @JsonProperty("created")
    public FluffyCreated getCreated() { return created; }
    @JsonProperty("created")
    public void setCreated(FluffyCreated value) { this.created = value; }

    @JsonProperty("end")
    public String getEnd() { return end; }
    @JsonProperty("end")
    public void setEnd(String value) { this.end = value; }

    @JsonProperty("services")
    public List<String> getServices() { return services; }
    @JsonProperty("services")
    public void setServices(List<String> value) { this.services = value; }

    @JsonProperty("skipUpdated")
    public Boolean getSkipUpdated() { return skipUpdated; }
    @JsonProperty("skipUpdated")
    public void setSkipUpdated(Boolean value) { this.skipUpdated = value; }

    @JsonProperty("start")
    public String getStart() { return start; }
    @JsonProperty("start")
    public void setStart(String value) { this.start = value; }

    @JsonProperty("workers")
    public List<String> getWorkers() { return workers; }
    @JsonProperty("workers")
    public void setWorkers(List<String> value) { this.workers = value; }
}
