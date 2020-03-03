package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class AdditionalDurations {
    private TypeElement type;
    private AdditionalDurationsItems items;

    @JsonProperty("type")
    public TypeElement getType() { return type; }
    @JsonProperty("type")
    public void setType(TypeElement value) { this.type = value; }

    @JsonProperty("items")
    public AdditionalDurationsItems getItems() { return items; }
    @JsonProperty("items")
    public void setItems(AdditionalDurationsItems value) { this.items = value; }
}
