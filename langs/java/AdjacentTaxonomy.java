package ru.gbooking.apiv2;

import java.util.*;

public class AdjacentTaxonomy {
    private Boolean isAnyAvailable;
    private Double order;
    private Double slotDuration;
    private String taxonomyID;

    public Boolean getIsAnyAvailable() { return isAnyAvailable; }
    public void setIsAnyAvailable(Boolean value) { this.isAnyAvailable = value; }

    public Double getOrder() { return order; }
    public void setOrder(Double value) { this.order = value; }

    public Double getSlotDuration() { return slotDuration; }
    public void setSlotDuration(Double value) { this.slotDuration = value; }

    public String getTaxonomyID() { return taxonomyID; }
    public void setTaxonomyID(String value) { this.taxonomyID = value; }
}
