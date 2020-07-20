package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class Review {
    private TaxonomyClass business;
    private TaxonomyClass taxonomy;
    private TaxonomyClass worker;

    @JsonProperty("business")
    public TaxonomyClass getBusiness() { return business; }
    @JsonProperty("business")
    public void setBusiness(TaxonomyClass value) { this.business = value; }

    @JsonProperty("taxonomy")
    public TaxonomyClass getTaxonomy() { return taxonomy; }
    @JsonProperty("taxonomy")
    public void setTaxonomy(TaxonomyClass value) { this.taxonomy = value; }

    @JsonProperty("worker")
    public TaxonomyClass getWorker() { return worker; }
    @JsonProperty("worker")
    public void setWorker(TaxonomyClass value) { this.worker = value; }
}
