package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class CracCRACResourcesFreeByDateRequestParam {
    private double duration;
    private List<String> resources;
    private StickyTaxonomy taxonomy;

    @JsonProperty("duration")
    public double getDuration() { return duration; }
    @JsonProperty("duration")
    public void setDuration(double value) { this.duration = value; }

    @JsonProperty("resources")
    public List<String> getResources() { return resources; }
    @JsonProperty("resources")
    public void setResources(List<String> value) { this.resources = value; }

    @JsonProperty("taxonomy")
    public StickyTaxonomy getTaxonomy() { return taxonomy; }
    @JsonProperty("taxonomy")
    public void setTaxonomy(StickyTaxonomy value) { this.taxonomy = value; }
}
