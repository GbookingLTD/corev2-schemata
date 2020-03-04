package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class ShowcaseItem {
    private String id;
    private List<ShowcaseItemAdditionalDuration> additionalDurations;
    private String businessID;
    private String taxonomyID;

    @JsonProperty("_id")
    public String getID() { return id; }
    @JsonProperty("_id")
    public void setID(String value) { this.id = value; }

    @JsonProperty("additionalDurations")
    public List<ShowcaseItemAdditionalDuration> getAdditionalDurations() { return additionalDurations; }
    @JsonProperty("additionalDurations")
    public void setAdditionalDurations(List<ShowcaseItemAdditionalDuration> value) { this.additionalDurations = value; }

    @JsonProperty("businessID")
    public String getBusinessID() { return businessID; }
    @JsonProperty("businessID")
    public void setBusinessID(String value) { this.businessID = value; }

    @JsonProperty("taxonomyID")
    public String getTaxonomyID() { return taxonomyID; }
    @JsonProperty("taxonomyID")
    public void setTaxonomyID(String value) { this.taxonomyID = value; }
}
