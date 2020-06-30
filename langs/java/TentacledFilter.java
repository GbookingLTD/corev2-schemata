package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;
import java.time.OffsetDateTime;
import java.util.List;

public class TentacledFilter {
    private TentacledCreated created;
    private OffsetDateTime end;
    private List<String> services;
    private Boolean skipUpdated;
    private OffsetDateTime start;
    private List<String> workers;

    @JsonProperty("created")
    public TentacledCreated getCreated() { return created; }
    @JsonProperty("created")
    public void setCreated(TentacledCreated value) { this.created = value; }

    @JsonProperty("end")
    public OffsetDateTime getEnd() { return end; }
    @JsonProperty("end")
    public void setEnd(OffsetDateTime value) { this.end = value; }

    @JsonProperty("services")
    public List<String> getServices() { return services; }
    @JsonProperty("services")
    public void setServices(List<String> value) { this.services = value; }

    @JsonProperty("skipUpdated")
    public Boolean getSkipUpdated() { return skipUpdated; }
    @JsonProperty("skipUpdated")
    public void setSkipUpdated(Boolean value) { this.skipUpdated = value; }

    @JsonProperty("start")
    public OffsetDateTime getStart() { return start; }
    @JsonProperty("start")
    public void setStart(OffsetDateTime value) { this.start = value; }

    @JsonProperty("workers")
    public List<String> getWorkers() { return workers; }
    @JsonProperty("workers")
    public void setWorkers(List<String> value) { this.workers = value; }
}
