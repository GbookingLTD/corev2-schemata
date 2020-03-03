package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class CabinetProperties {
    private BeijingPigeon id;
    private BeijingPigeon name;
    private BeijingPigeon active;

    @JsonProperty("id")
    public BeijingPigeon getID() { return id; }
    @JsonProperty("id")
    public void setID(BeijingPigeon value) { this.id = value; }

    @JsonProperty("name")
    public BeijingPigeon getName() { return name; }
    @JsonProperty("name")
    public void setName(BeijingPigeon value) { this.name = value; }

    @JsonProperty("active")
    public BeijingPigeon getActive() { return active; }
    @JsonProperty("active")
    public void setActive(BeijingPigeon value) { this.active = value; }
}
