package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class ResourceLocation {
    private TypeElement type;
    private ResourceLocationProperties properties;
    private List<Object> required;

    @JsonProperty("type")
    public TypeElement getType() { return type; }
    @JsonProperty("type")
    public void setType(TypeElement value) { this.type = value; }

    @JsonProperty("properties")
    public ResourceLocationProperties getProperties() { return properties; }
    @JsonProperty("properties")
    public void setProperties(ResourceLocationProperties value) { this.properties = value; }

    @JsonProperty("required")
    public List<Object> getRequired() { return required; }
    @JsonProperty("required")
    public void setRequired(List<Object> value) { this.required = value; }
}
