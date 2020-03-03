package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class Status {
    private String definition;
    private TypeElement type;
    private List<String> statusEnum;

    @JsonProperty("definition")
    public String getDefinition() { return definition; }
    @JsonProperty("definition")
    public void setDefinition(String value) { this.definition = value; }

    @JsonProperty("type")
    public TypeElement getType() { return type; }
    @JsonProperty("type")
    public void setType(TypeElement value) { this.type = value; }

    @JsonProperty("enum")
    public List<String> getStatusEnum() { return statusEnum; }
    @JsonProperty("enum")
    public void setStatusEnum(List<String> value) { this.statusEnum = value; }
}
