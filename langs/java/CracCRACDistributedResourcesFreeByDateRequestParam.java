package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class CracCRACDistributedResourcesFreeByDateRequestParam {
    private Business4 business;
    private List<String> resources;
    private TentacledTaxonomy taxonomy;

    @JsonProperty("business")
    public Business4 getBusiness() { return business; }
    @JsonProperty("business")
    public void setBusiness(Business4 value) { this.business = value; }

    @JsonProperty("resources")
    public List<String> getResources() { return resources; }
    @JsonProperty("resources")
    public void setResources(List<String> value) { this.resources = value; }

    @JsonProperty("taxonomy")
    public TentacledTaxonomy getTaxonomy() { return taxonomy; }
    @JsonProperty("taxonomy")
    public void setTaxonomy(TentacledTaxonomy value) { this.taxonomy = value; }
}
