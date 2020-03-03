package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class Slots {
    private TypeElement type;
    private SlotsProperties properties;

    @JsonProperty("type")
    public TypeElement getType() { return type; }
    @JsonProperty("type")
    public void setType(TypeElement value) { this.type = value; }

    @JsonProperty("properties")
    public SlotsProperties getProperties() { return properties; }
    @JsonProperty("properties")
    public void setProperties(SlotsProperties value) { this.properties = value; }
}
