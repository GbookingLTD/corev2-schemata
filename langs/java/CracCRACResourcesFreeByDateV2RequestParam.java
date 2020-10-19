package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;
import java.util.List;

public class CracCRACResourcesFreeByDateV2RequestParam {
    private Business5 business;
    private double duration;
    private List<Double> durations;
    private List<String> resources;
    private IndigoTaxonomy taxonomy;

    @JsonProperty("business")
    public Business5 getBusiness() { return business; }
    @JsonProperty("business")
    public void setBusiness(Business5 value) { this.business = value; }

    @JsonProperty("duration")
    public double getDuration() { return duration; }
    @JsonProperty("duration")
    public void setDuration(double value) { this.duration = value; }

    @JsonProperty("durations")
    public List<Double> getDurations() { return durations; }
    @JsonProperty("durations")
    public void setDurations(List<Double> value) { this.durations = value; }

    @JsonProperty("resources")
    public List<String> getResources() { return resources; }
    @JsonProperty("resources")
    public void setResources(List<String> value) { this.resources = value; }

    @JsonProperty("taxonomy")
    public IndigoTaxonomy getTaxonomy() { return taxonomy; }
    @JsonProperty("taxonomy")
    public void setTaxonomy(IndigoTaxonomy value) { this.taxonomy = value; }
}
