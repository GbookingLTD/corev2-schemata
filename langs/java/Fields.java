package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class Fields {
    private TypeElement type;
    private BackofficeType items;

    @JsonProperty("type")
    public TypeElement getType() { return type; }
    @JsonProperty("type")
    public void setType(TypeElement value) { this.type = value; }

    @JsonProperty("items")
    public BackofficeType getItems() { return items; }
    @JsonProperty("items")
    public void setItems(BackofficeType value) { this.items = value; }
}
