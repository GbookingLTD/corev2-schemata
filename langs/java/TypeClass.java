package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class TypeClass {
    private String description;
    private TypeElement type;
    private List<String> typeEnum;
    private List<TypeMetaEnum> metaEnum;

    @JsonProperty("description")
    public String getDescription() { return description; }
    @JsonProperty("description")
    public void setDescription(String value) { this.description = value; }

    @JsonProperty("type")
    public TypeElement getType() { return type; }
    @JsonProperty("type")
    public void setType(TypeElement value) { this.type = value; }

    @JsonProperty("enum")
    public List<String> getTypeEnum() { return typeEnum; }
    @JsonProperty("enum")
    public void setTypeEnum(List<String> value) { this.typeEnum = value; }

    @JsonProperty("meta:enum")
    public List<TypeMetaEnum> getMetaEnum() { return metaEnum; }
    @JsonProperty("meta:enum")
    public void setMetaEnum(List<TypeMetaEnum> value) { this.metaEnum = value; }
}
