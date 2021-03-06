package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;
import java.util.List;

public class CracCRACDistributedResourcesFreeByDateRequestParam {
    private Business5 business;
    private List<String> resources;
    private TentacledTaxonomy taxonomy;

    @JsonProperty("business")
    public Business5 getBusiness() { return business; }
    @JsonProperty("business")
    public void setBusiness(Business5 value) { this.business = value; }

    @JsonProperty("resources")
    public List<String> getResources() { return resources; }
    @JsonProperty("resources")
    public void setResources(List<String> value) { this.resources = value; }

    @JsonProperty("taxonomy")
    public TentacledTaxonomy getTaxonomy() { return taxonomy; }
    @JsonProperty("taxonomy")
    public void setTaxonomy(TentacledTaxonomy value) { this.taxonomy = value; }
}
