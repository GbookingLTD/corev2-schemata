package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class CracCRACDistributedResourcesFreeByDateRequestParam {
    private MischievousBusiness business;
    private List<String> resources;
    private PurpleTaxonomy taxonomy;

    @JsonProperty("business")
    public MischievousBusiness getBusiness() { return business; }
    @JsonProperty("business")
    public void setBusiness(MischievousBusiness value) { this.business = value; }

    @JsonProperty("resources")
    public List<String> getResources() { return resources; }
    @JsonProperty("resources")
    public void setResources(List<String> value) { this.resources = value; }

    @JsonProperty("taxonomy")
    public PurpleTaxonomy getTaxonomy() { return taxonomy; }
    @JsonProperty("taxonomy")
    public void setTaxonomy(PurpleTaxonomy value) { this.taxonomy = value; }
}
