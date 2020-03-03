package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class ClientBlockingSettings {
    private TypeElement type;
    private ClientBlockingSettingsProperties properties;
    private boolean additionalProperties;

    @JsonProperty("type")
    public TypeElement getType() { return type; }
    @JsonProperty("type")
    public void setType(TypeElement value) { this.type = value; }

    @JsonProperty("properties")
    public ClientBlockingSettingsProperties getProperties() { return properties; }
    @JsonProperty("properties")
    public void setProperties(ClientBlockingSettingsProperties value) { this.properties = value; }

    @JsonProperty("additionalProperties")
    public boolean getAdditionalProperties() { return additionalProperties; }
    @JsonProperty("additionalProperties")
    public void setAdditionalProperties(boolean value) { this.additionalProperties = value; }
}
