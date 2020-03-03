package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class AdditionalBusinessTaxonomyProduct {
    private String title;
    private TypeElement type;
    private AdditionalBusinessTaxonomyProductProperties properties;
    private List<String> required;
    private boolean additionalProperties;

    @JsonProperty("title")
    public String getTitle() { return title; }
    @JsonProperty("title")
    public void setTitle(String value) { this.title = value; }

    @JsonProperty("type")
    public TypeElement getType() { return type; }
    @JsonProperty("type")
    public void setType(TypeElement value) { this.type = value; }

    @JsonProperty("properties")
    public AdditionalBusinessTaxonomyProductProperties getProperties() { return properties; }
    @JsonProperty("properties")
    public void setProperties(AdditionalBusinessTaxonomyProductProperties value) { this.properties = value; }

    @JsonProperty("required")
    public List<String> getRequired() { return required; }
    @JsonProperty("required")
    public void setRequired(List<String> value) { this.required = value; }

    @JsonProperty("additionalProperties")
    public boolean getAdditionalProperties() { return additionalProperties; }
    @JsonProperty("additionalProperties")
    public void setAdditionalProperties(boolean value) { this.additionalProperties = value; }
}
