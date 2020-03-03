package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class CallbackWidgetConfiguration {
    private TypeElement type;
    private CallbackWidgetConfigurationProperties properties;

    @JsonProperty("type")
    public TypeElement getType() { return type; }
    @JsonProperty("type")
    public void setType(TypeElement value) { this.type = value; }

    @JsonProperty("properties")
    public CallbackWidgetConfigurationProperties getProperties() { return properties; }
    @JsonProperty("properties")
    public void setProperties(CallbackWidgetConfigurationProperties value) { this.properties = value; }
}
