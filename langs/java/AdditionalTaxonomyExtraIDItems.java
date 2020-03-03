package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class AdditionalTaxonomyExtraIDItems {
    private TypeElement type;
    private Properies properies;

    @JsonProperty("type")
    public TypeElement getType() { return type; }
    @JsonProperty("type")
    public void setType(TypeElement value) { this.type = value; }

    @JsonProperty("properies")
    public Properies getProperies() { return properies; }
    @JsonProperty("properies")
    public void setProperies(Properies value) { this.properies = value; }
}
