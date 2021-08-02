package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class TaxonomyElement {
    private Double count;
    private String taxonomyID;

    @JsonProperty("count")
    public Double getCount() { return count; }
    @JsonProperty("count")
    public void setCount(Double value) { this.count = value; }

    @JsonProperty("taxonomyID")
    public String getTaxonomyID() { return taxonomyID; }
    @JsonProperty("taxonomyID")
    public void setTaxonomyID(String value) { this.taxonomyID = value; }
}
