package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class CredOneOf {
    private TypeElement type;
    private List<Object> params;
    private List<String> required;
    private boolean additionalProperties;
    private OneOfProperties properties;

    @JsonProperty("type")
    public TypeElement getType() { return type; }
    @JsonProperty("type")
    public void setType(TypeElement value) { this.type = value; }

    @JsonProperty("params")
    public List<Object> getParams() { return params; }
    @JsonProperty("params")
    public void setParams(List<Object> value) { this.params = value; }

    @JsonProperty("required")
    public List<String> getRequired() { return required; }
    @JsonProperty("required")
    public void setRequired(List<String> value) { this.required = value; }

    @JsonProperty("additionalProperties")
    public boolean getAdditionalProperties() { return additionalProperties; }
    @JsonProperty("additionalProperties")
    public void setAdditionalProperties(boolean value) { this.additionalProperties = value; }

    @JsonProperty("properties")
    public OneOfProperties getProperties() { return properties; }
    @JsonProperty("properties")
    public void setProperties(OneOfProperties value) { this.properties = value; }
}
