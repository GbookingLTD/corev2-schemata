package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class ID {
    private String description;
    private TypeUnion type;

    @JsonProperty("description")
    public String getDescription() { return description; }
    @JsonProperty("description")
    public void setDescription(String value) { this.description = value; }

    @JsonProperty("type")
    public TypeUnion getType() { return type; }
    @JsonProperty("type")
    public void setType(TypeUnion value) { this.type = value; }
}
