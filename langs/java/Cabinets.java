package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class Cabinets {
    private TypeElement type;
    private GeneralInfo items;

    @JsonProperty("type")
    public TypeElement getType() { return type; }
    @JsonProperty("type")
    public void setType(TypeElement value) { this.type = value; }

    @JsonProperty("items")
    public GeneralInfo getItems() { return items; }
    @JsonProperty("items")
    public void setItems(GeneralInfo value) { this.items = value; }
}
