package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class AdditionalSettings {
    private TypeElement type;
    private AdditionalSettingsProperties properties;

    @JsonProperty("type")
    public TypeElement getType() { return type; }
    @JsonProperty("type")
    public void setType(TypeElement value) { this.type = value; }

    @JsonProperty("properties")
    public AdditionalSettingsProperties getProperties() { return properties; }
    @JsonProperty("properties")
    public void setProperties(AdditionalSettingsProperties value) { this.properties = value; }
}
