package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class Models {
    private String id;
    private String title;
    private ModelsProperties properties;
    private List<String> required;
    private Definitions definitions;
    private Boolean additionalProperties;
    private Boolean metaExtensible;
    private List<String> metaExtends;
    private TypeElement type;
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
    public ModelsProperties getProperties() { return properties; }
    @JsonProperty("properties")
    public void setProperties(ModelsProperties value) { this.properties = value; }

    @JsonProperty("required")
    public List<String> getRequired() { return required; }
    @JsonProperty("required")
    public void setRequired(List<String> value) { this.required = value; }

    @JsonProperty("definitions")
    public Definitions getDefinitions() { return definitions; }
    @JsonProperty("definitions")
    public void setDefinitions(Definitions value) { this.definitions = value; }

    @JsonProperty("additionalProperties")
    public Boolean getAdditionalProperties() { return additionalProperties; }
    @JsonProperty("additionalProperties")
    public void setAdditionalProperties(Boolean value) { this.additionalProperties = value; }

    @JsonProperty("meta:extensible")
    public Boolean getMetaExtensible() { return metaExtensible; }
    @JsonProperty("meta:extensible")
    public void setMetaExtensible(Boolean value) { this.metaExtensible = value; }

    @JsonProperty("meta:extends")
    public List<String> getMetaExtends() { return metaExtends; }
    @JsonProperty("meta:extends")
    public void setMetaExtends(List<String> value) { this.metaExtends = value; }

    @JsonProperty("type")
    public TypeElement getType() { return type; }
    @JsonProperty("type")
    public void setType(TypeElement value) { this.type = value; }

    @JsonProperty("description")
    public String getDescription() { return description; }
    @JsonProperty("description")
    public void setDescription(String value) { this.description = value; }
}
