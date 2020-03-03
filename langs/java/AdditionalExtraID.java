package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class AdditionalExtraID {
    private String description;
    private TypeElement type;
    private BeijingPigeon items;

    @JsonProperty("description")
    public String getDescription() { return description; }
    @JsonProperty("description")
    public void setDescription(String value) { this.description = value; }

    @JsonProperty("type")
    public TypeElement getType() { return type; }
    @JsonProperty("type")
    public void setType(TypeElement value) { this.type = value; }

    @JsonProperty("items")
    public BeijingPigeon getItems() { return items; }
    @JsonProperty("items")
    public void setItems(BeijingPigeon value) { this.items = value; }
}
