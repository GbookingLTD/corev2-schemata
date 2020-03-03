package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class PropertiesBackofficeConfiguration {
    private TypeElement type;
    private BackofficeConfigurationPropertiesClass properties;

    @JsonProperty("type")
    public TypeElement getType() { return type; }
    @JsonProperty("type")
    public void setType(TypeElement value) { this.type = value; }

    @JsonProperty("properties")
    public BackofficeConfigurationPropertiesClass getProperties() { return properties; }
    @JsonProperty("properties")
    public void setProperties(BackofficeConfigurationPropertiesClass value) { this.properties = value; }
}
