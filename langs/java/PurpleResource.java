package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;
import java.util.List;

public class PurpleResource {
    private PurpleID id;

    @JsonProperty("id")
    public PurpleID getID() { return id; }
    @JsonProperty("id")
    public void setID(PurpleID value) { this.id = value; }
}
