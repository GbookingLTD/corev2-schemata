package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class ResourceTaxonomyChildren {
    private TypeElement type;
    private ResourceTaxonomyChildrenProperties properties;
    private List<String> required;

    @JsonProperty("type")
    public TypeElement getType() { return type; }
    @JsonProperty("type")
    public void setType(TypeElement value) { this.type = value; }

    @JsonProperty("properties")
    public ResourceTaxonomyChildrenProperties getProperties() { return properties; }
    @JsonProperty("properties")
    public void setProperties(ResourceTaxonomyChildrenProperties value) { this.properties = value; }

    @JsonProperty("required")
    public List<String> getRequired() { return required; }
    @JsonProperty("required")
    public void setRequired(List<String> value) { this.required = value; }
}
