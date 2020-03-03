package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class Cred {
    private String description;
    private List<CredOneOf> oneOf;

    @JsonProperty("description")
    public String getDescription() { return description; }
    @JsonProperty("description")
    public void setDescription(String value) { this.description = value; }

    @JsonProperty("oneOf")
    public List<CredOneOf> getOneOf() { return oneOf; }
    @JsonProperty("oneOf")
    public void setOneOf(List<CredOneOf> value) { this.oneOf = value; }
}
