package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class ResourceTaxonomyLevel {
    private String id;
    private TypeElement type;
    private ResourceTaxonomyLevelProperties properties;
    private List<String> required;

    @JsonProperty("$id")
    public String getID() { return id; }
    @JsonProperty("$id")
    public void setID(String value) { this.id = value; }

    @JsonProperty("type")
    public TypeElement getType() { return type; }
    @JsonProperty("type")
    public void setType(TypeElement value) { this.type = value; }

    @JsonProperty("properties")
    public ResourceTaxonomyLevelProperties getProperties() { return properties; }
    @JsonProperty("properties")
    public void setProperties(ResourceTaxonomyLevelProperties value) { this.properties = value; }

    @JsonProperty("required")
    public List<String> getRequired() { return required; }
    @JsonProperty("required")
    public void setRequired(List<String> value) { this.required = value; }
}
