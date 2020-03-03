package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class TaxonomiesComplexItems {
    private TypeElement type;
    private IndigoProperties properties;

    @JsonProperty("type")
    public TypeElement getType() { return type; }
    @JsonProperty("type")
    public void setType(TypeElement value) { this.type = value; }

    @JsonProperty("properties")
    public IndigoProperties getProperties() { return properties; }
    @JsonProperty("properties")
    public void setProperties(IndigoProperties value) { this.properties = value; }
}
