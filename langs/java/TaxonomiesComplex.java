package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class TaxonomiesComplex {
    private TypeElement type;
    private TaxonomiesComplexItems items;

    @JsonProperty("type")
    public TypeElement getType() { return type; }
    @JsonProperty("type")
    public void setType(TypeElement value) { this.type = value; }

    @JsonProperty("items")
    public TaxonomiesComplexItems getItems() { return items; }
    @JsonProperty("items")
    public void setItems(TaxonomiesComplexItems value) { this.items = value; }
}
