package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class AdjacentTaxonomies {
    private TypeElement type;
    private AdjacentTaxonomiesItems items;

    @JsonProperty("type")
    public TypeElement getType() { return type; }
    @JsonProperty("type")
    public void setType(TypeElement value) { this.type = value; }

    @JsonProperty("items")
    public AdjacentTaxonomiesItems getItems() { return items; }
    @JsonProperty("items")
    public void setItems(AdjacentTaxonomiesItems value) { this.items = value; }
}
