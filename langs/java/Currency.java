package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class Currency {
    private String description;
    private String ref;

    @JsonProperty("description")
    public String getDescription() { return description; }
    @JsonProperty("description")
    public void setDescription(String value) { this.description = value; }

    @JsonProperty("$ref")
    public String getRef() { return ref; }
    @JsonProperty("$ref")
    public void setRef(String value) { this.ref = value; }
}
