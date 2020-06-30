package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class PurpleTaxonomy {
    private String id;

    @JsonProperty("id")
    public String getID() { return id; }
    @JsonProperty("id")
    public void setID(String value) { this.id = value; }
}
