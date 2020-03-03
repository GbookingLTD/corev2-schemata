package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class AdditionalBusinessTaxonomyProductProperties {
    private HammerfestPonies id;
    private HammerfestPonies extraID;
    private HammerfestPonies required;

    @JsonProperty("id")
    public HammerfestPonies getID() { return id; }
    @JsonProperty("id")
    public void setID(HammerfestPonies value) { this.id = value; }

    @JsonProperty("extraID")
    public HammerfestPonies getExtraID() { return extraID; }
    @JsonProperty("extraID")
    public void setExtraID(HammerfestPonies value) { this.extraID = value; }

    @JsonProperty("required")
    public HammerfestPonies getRequired() { return required; }
    @JsonProperty("required")
    public void setRequired(HammerfestPonies value) { this.required = value; }
}
