package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class MiniWidgetConfiguration {
    private TypeElement type;
    private MiniWidgetConfigurationProperties properties;

    @JsonProperty("type")
    public TypeElement getType() { return type; }
    @JsonProperty("type")
    public void setType(TypeElement value) { this.type = value; }

    @JsonProperty("properties")
    public MiniWidgetConfigurationProperties getProperties() { return properties; }
    @JsonProperty("properties")
    public void setProperties(MiniWidgetConfigurationProperties value) { this.properties = value; }
}
