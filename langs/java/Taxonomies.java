package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class Taxonomies {
    private TypeElement type;
    private BackofficeConfigurationClass items;
    private String description;

    @JsonProperty("type")
    public TypeElement getType() { return type; }
    @JsonProperty("type")
    public void setType(TypeElement value) { this.type = value; }

    @JsonProperty("items")
    public BackofficeConfigurationClass getItems() { return items; }
    @JsonProperty("items")
    public void setItems(BackofficeConfigurationClass value) { this.items = value; }

    @JsonProperty("description")
    public String getDescription() { return description; }
    @JsonProperty("description")
    public void setDescription(String value) { this.description = value; }
}
