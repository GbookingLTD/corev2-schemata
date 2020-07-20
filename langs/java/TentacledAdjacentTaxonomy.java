package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class TentacledAdjacentTaxonomy {
    private Boolean isAnyAvailable;
    private Double order;
    private Double slotDuration;
    private String taxonomyID;

    @JsonProperty("isAnyAvailable")
    public Boolean getIsAnyAvailable() { return isAnyAvailable; }
    @JsonProperty("isAnyAvailable")
    public void setIsAnyAvailable(Boolean value) { this.isAnyAvailable = value; }

    @JsonProperty("order")
    public Double getOrder() { return order; }
    @JsonProperty("order")
    public void setOrder(Double value) { this.order = value; }

    @JsonProperty("slotDuration")
    public Double getSlotDuration() { return slotDuration; }
    @JsonProperty("slotDuration")
    public void setSlotDuration(Double value) { this.slotDuration = value; }

    @JsonProperty("taxonomyID")
    public String getTaxonomyID() { return taxonomyID; }
    @JsonProperty("taxonomyID")
    public void setTaxonomyID(String value) { this.taxonomyID = value; }
}
