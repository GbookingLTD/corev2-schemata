package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class SocialSharing {
    private TypeElement type;
    private SocialSharingProperties properties;

    @JsonProperty("type")
    public TypeElement getType() { return type; }
    @JsonProperty("type")
    public void setType(TypeElement value) { this.type = value; }

    @JsonProperty("properties")
    public SocialSharingProperties getProperties() { return properties; }
    @JsonProperty("properties")
    public void setProperties(SocialSharingProperties value) { this.properties = value; }
}
