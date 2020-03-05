package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class PurpleFilters {
    private PurpleDate date;
    private List<PurpleResourceFilter> resources;
    private List<String> rooms;
    private List<String> taxonomies;

    @JsonProperty("date")
    public PurpleDate getDate() { return date; }
    @JsonProperty("date")
    public void setDate(PurpleDate value) { this.date = value; }

    @JsonProperty("resources")
    public List<PurpleResourceFilter> getResources() { return resources; }
    @JsonProperty("resources")
    public void setResources(List<PurpleResourceFilter> value) { this.resources = value; }

    @JsonProperty("rooms")
    public List<String> getRooms() { return rooms; }
    @JsonProperty("rooms")
    public void setRooms(List<String> value) { this.rooms = value; }

    @JsonProperty("taxonomies")
    public List<String> getTaxonomies() { return taxonomies; }
    @JsonProperty("taxonomies")
    public void setTaxonomies(List<String> value) { this.taxonomies = value; }
}
