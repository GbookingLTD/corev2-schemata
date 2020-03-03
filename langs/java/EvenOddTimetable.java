package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class EvenOddTimetable {
    private boolean metaExtensible;
    private List<String> metaExtends;
    private TypeElement type;
    private EvenOddTimetableProperties properties;
    private List<String> required;

    @JsonProperty("meta:extensible")
    public boolean getMetaExtensible() { return metaExtensible; }
    @JsonProperty("meta:extensible")
    public void setMetaExtensible(boolean value) { this.metaExtensible = value; }

    @JsonProperty("meta:extends")
    public List<String> getMetaExtends() { return metaExtends; }
    @JsonProperty("meta:extends")
    public void setMetaExtends(List<String> value) { this.metaExtends = value; }

    @JsonProperty("type")
    public TypeElement getType() { return type; }
    @JsonProperty("type")
    public void setType(TypeElement value) { this.type = value; }

    @JsonProperty("properties")
    public EvenOddTimetableProperties getProperties() { return properties; }
    @JsonProperty("properties")
    public void setProperties(EvenOddTimetableProperties value) { this.properties = value; }

    @JsonProperty("required")
    public List<String> getRequired() { return required; }
    @JsonProperty("required")
    public void setRequired(List<String> value) { this.required = value; }
}
