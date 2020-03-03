package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class AdjacentTaxonomiesItems {
    private TypeElement type;
    private PurpleProperties properties;
    private boolean additionalProperties;

    @JsonProperty("type")
    public TypeElement getType() { return type; }
    @JsonProperty("type")
    public void setType(TypeElement value) { this.type = value; }

    @JsonProperty("properties")
    public PurpleProperties getProperties() { return properties; }
    @JsonProperty("properties")
    public void setProperties(PurpleProperties value) { this.properties = value; }

    @JsonProperty("additionalProperties")
    public boolean getAdditionalProperties() { return additionalProperties; }
    @JsonProperty("additionalProperties")
    public void setAdditionalProperties(boolean value) { this.additionalProperties = value; }
}
