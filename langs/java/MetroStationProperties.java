package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class MetroStationProperties {
    private BeijingPigeon id;
    private BeijingPigeon name;
    private BeijingPigeon description;

    @JsonProperty("_id")
    public BeijingPigeon getID() { return id; }
    @JsonProperty("_id")
    public void setID(BeijingPigeon value) { this.id = value; }

    @JsonProperty("name")
    public BeijingPigeon getName() { return name; }
    @JsonProperty("name")
    public void setName(BeijingPigeon value) { this.name = value; }

    @JsonProperty("description")
    public BeijingPigeon getDescription() { return description; }
    @JsonProperty("description")
    public void setDescription(BeijingPigeon value) { this.description = value; }
}
