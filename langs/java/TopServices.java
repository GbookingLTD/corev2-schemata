package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class TopServices {
    private TypeElement type;
    private TopServicesProperties properties;

    @JsonProperty("type")
    public TypeElement getType() { return type; }
    @JsonProperty("type")
    public void setType(TypeElement value) { this.type = value; }

    @JsonProperty("properties")
    public TopServicesProperties getProperties() { return properties; }
    @JsonProperty("properties")
    public void setProperties(TopServicesProperties value) { this.properties = value; }
}
