package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class DateLimits {
    private TypeElement type;
    private DateLimitsItems items;

    @JsonProperty("type")
    public TypeElement getType() { return type; }
    @JsonProperty("type")
    public void setType(TypeElement value) { this.type = value; }

    @JsonProperty("items")
    public DateLimitsItems getItems() { return items; }
    @JsonProperty("items")
    public void setItems(DateLimitsItems value) { this.items = value; }
}
