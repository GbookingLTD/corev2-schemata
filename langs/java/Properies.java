package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class Properies {
    private BeijingPigeon taxonomyExtraID;
    private BeijingPigeon extraID;

    @JsonProperty("taxonomyExtraID")
    public BeijingPigeon getTaxonomyExtraID() { return taxonomyExtraID; }
    @JsonProperty("taxonomyExtraID")
    public void setTaxonomyExtraID(BeijingPigeon value) { this.taxonomyExtraID = value; }

    @JsonProperty("extraId")
    public BeijingPigeon getExtraID() { return extraID; }
    @JsonProperty("extraId")
    public void setExtraID(BeijingPigeon value) { this.extraID = value; }
}
