package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class TentacledProperties {
    private BeijingPigeon id;
    private BeijingPigeon taxonomyID;
    private AdditionalDurations additionalDurations;
    private BeijingPigeon businessID;

    @JsonProperty("_id")
    public BeijingPigeon getID() { return id; }
    @JsonProperty("_id")
    public void setID(BeijingPigeon value) { this.id = value; }

    @JsonProperty("taxonomyID")
    public BeijingPigeon getTaxonomyID() { return taxonomyID; }
    @JsonProperty("taxonomyID")
    public void setTaxonomyID(BeijingPigeon value) { this.taxonomyID = value; }

    @JsonProperty("additionalDurations")
    public AdditionalDurations getAdditionalDurations() { return additionalDurations; }
    @JsonProperty("additionalDurations")
    public void setAdditionalDurations(AdditionalDurations value) { this.additionalDurations = value; }

    @JsonProperty("businessID")
    public BeijingPigeon getBusinessID() { return businessID; }
    @JsonProperty("businessID")
    public void setBusinessID(BeijingPigeon value) { this.businessID = value; }
}
