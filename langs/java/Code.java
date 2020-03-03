package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class Code {
    private String description;
    private TypeElement type;
    private Map<String, String> metaEnum;
    private List<Long> codeEnum;

    @JsonProperty("description")
    public String getDescription() { return description; }
    @JsonProperty("description")
    public void setDescription(String value) { this.description = value; }

    @JsonProperty("type")
    public TypeElement getType() { return type; }
    @JsonProperty("type")
    public void setType(TypeElement value) { this.type = value; }

    @JsonProperty("meta:enum")
    public Map<String, String> getMetaEnum() { return metaEnum; }
    @JsonProperty("meta:enum")
    public void setMetaEnum(Map<String, String> value) { this.metaEnum = value; }

    @JsonProperty("enum")
    public List<Long> getCodeEnum() { return codeEnum; }
    @JsonProperty("enum")
    public void setCodeEnum(List<Long> value) { this.codeEnum = value; }
}
