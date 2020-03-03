package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class Common {
    private String id;
    private String title;
    private CommonProperties properties;
    private List<String> required;
    private boolean additionalProperties;
    private String description;

    @JsonProperty("$id")
    public String getID() { return id; }
    @JsonProperty("$id")
    public void setID(String value) { this.id = value; }

    @JsonProperty("title")
    public String getTitle() { return title; }
    @JsonProperty("title")
    public void setTitle(String value) { this.title = value; }

    @JsonProperty("properties")
    public CommonProperties getProperties() { return properties; }
    @JsonProperty("properties")
    public void setProperties(CommonProperties value) { this.properties = value; }

    @JsonProperty("required")
    public List<String> getRequired() { return required; }
    @JsonProperty("required")
    public void setRequired(List<String> value) { this.required = value; }

    @JsonProperty("additionalProperties")
    public boolean getAdditionalProperties() { return additionalProperties; }
    @JsonProperty("additionalProperties")
    public void setAdditionalProperties(boolean value) { this.additionalProperties = value; }

    @JsonProperty("description")
    public String getDescription() { return description; }
    @JsonProperty("description")
    public void setDescription(String value) { this.description = value; }
}
