package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class AdditionalTaxonomyExtraID {
    private TypeElement type;
    private AdditionalTaxonomyExtraIDItems items;

    @JsonProperty("type")
    public TypeElement getType() { return type; }
    @JsonProperty("type")
    public void setType(TypeElement value) { this.type = value; }

    @JsonProperty("items")
    public AdditionalTaxonomyExtraIDItems getItems() { return items; }
    @JsonProperty("items")
    public void setItems(AdditionalTaxonomyExtraIDItems value) { this.items = value; }
}
