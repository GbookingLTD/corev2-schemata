package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class PurpleFilter {
    private PurpleCreated created;
    private String end;
    private List<String> services;
    private Boolean skipUpdated;
    private String start;
    private List<String> workers;

    @JsonProperty("created")
    public PurpleCreated getCreated() { return created; }
    @JsonProperty("created")
    public void setCreated(PurpleCreated value) { this.created = value; }

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
