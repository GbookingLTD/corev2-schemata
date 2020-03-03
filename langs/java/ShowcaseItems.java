package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class ShowcaseItems {
    private TypeElement type;
    private ShowcaseItemsItems items;

    @JsonProperty("type")
    public TypeElement getType() { return type; }
    @JsonProperty("type")
    public void setType(TypeElement value) { this.type = value; }

    @JsonProperty("items")
    public ShowcaseItemsItems getItems() { return items; }
    @JsonProperty("items")
    public void setItems(ShowcaseItemsItems value) { this.items = value; }
}
