package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;
import java.util.List;

public class PurpleResource {
    private ResourceID id;

    @JsonProperty("id")
    public ResourceID getID() { return id; }
    @JsonProperty("id")
    public void setID(ResourceID value) { this.id = value; }
}
