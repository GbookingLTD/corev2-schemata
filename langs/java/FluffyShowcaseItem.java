package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class FluffyShowcaseItem {
    private String id;
    private List<StickyAdditionalDuration> additionalDurations;
    private String businessID;
    private List<String> receptionTypes;
    private String taxonomyID;

    @JsonProperty("_id")
    public String getID() { return id; }
    @JsonProperty("_id")
    public void setID(String value) { this.id = value; }

    @JsonProperty("additionalDurations")
    public List<StickyAdditionalDuration> getAdditionalDurations() { return additionalDurations; }
    @JsonProperty("additionalDurations")
    public void setAdditionalDurations(List<StickyAdditionalDuration> value) { this.additionalDurations = value; }

    @JsonProperty("businessID")
    public String getBusinessID() { return businessID; }
    @JsonProperty("businessID")
    public void setBusinessID(String value) { this.businessID = value; }

    /**
     * Список видов приема услуги
     */
    @JsonProperty("receptionTypes")
    public List<String> getReceptionTypes() { return receptionTypes; }
    @JsonProperty("receptionTypes")
    public void setReceptionTypes(List<String> value) { this.receptionTypes = value; }

    @JsonProperty("taxonomyID")
    public String getTaxonomyID() { return taxonomyID; }
    @JsonProperty("taxonomyID")
    public void setTaxonomyID(String value) { this.taxonomyID = value; }
}
