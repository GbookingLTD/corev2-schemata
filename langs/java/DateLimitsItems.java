package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class DateLimitsItems {
    private TypeElement type;
    private FluffyProperties properties;
    private boolean additionalProperties;

    @JsonProperty("type")
    public TypeElement getType() { return type; }
    @JsonProperty("type")
    public void setType(TypeElement value) { this.type = value; }

    @JsonProperty("properties")
    public FluffyProperties getProperties() { return properties; }
    @JsonProperty("properties")
    public void setProperties(FluffyProperties value) { this.properties = value; }

    @JsonProperty("additionalProperties")
    public boolean getAdditionalProperties() { return additionalProperties; }
    @JsonProperty("additionalProperties")
    public void setAdditionalProperties(boolean value) { this.additionalProperties = value; }
}
