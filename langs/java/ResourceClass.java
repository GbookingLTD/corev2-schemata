package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class ResourceClass {
    private List<String> id;

    @JsonProperty("id")
    public List<String> getID() { return id; }
    @JsonProperty("id")
    public void setID(List<String> value) { this.id = value; }
}
