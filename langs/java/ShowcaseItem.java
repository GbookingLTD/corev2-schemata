package ru.gbooking.apiv2;

import java.util.*;

public class ShowcaseItem {
    private String id;
    private List<ShowcaseItemAdditionalDuration> additionalDurations;
    private String businessID;
    private String taxonomyID;

    public String getID() { return id; }
    public void setID(String value) { this.id = value; }

    public List<ShowcaseItemAdditionalDuration> getAdditionalDurations() { return additionalDurations; }
    public void setAdditionalDurations(List<ShowcaseItemAdditionalDuration> value) { this.additionalDurations = value; }

    public String getBusinessID() { return businessID; }
    public void setBusinessID(String value) { this.businessID = value; }

    public String getTaxonomyID() { return taxonomyID; }
    public void setTaxonomyID(String value) { this.taxonomyID = value; }
}
