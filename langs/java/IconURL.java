package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class IconURL {
    private String description;
    private List<TypeElement> type;

    @JsonProperty("description")
    public String getDescription() { return description; }
    @JsonProperty("description")
    public void setDescription(String value) { this.description = value; }

    @JsonProperty("type")
    public List<TypeElement> getType() { return type; }
    @JsonProperty("type")
    public void setType(List<TypeElement> value) { this.type = value; }
}
