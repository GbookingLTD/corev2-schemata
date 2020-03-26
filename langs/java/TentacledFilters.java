package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class TentacledFilters {
    private TentacledDate date;
    private List<TentacledResourceFilter> resources;
    private List<String> rooms;
    private List<String> taxonomies;

    @JsonProperty("date")
    public TentacledDate getDate() { return date; }
    @JsonProperty("date")
    public void setDate(TentacledDate value) { this.date = value; }

    @JsonProperty("resources")
    public List<TentacledResourceFilter> getResources() { return resources; }
    @JsonProperty("resources")
    public void setResources(List<TentacledResourceFilter> value) { this.resources = value; }

    @JsonProperty("rooms")
    public List<String> getRooms() { return rooms; }
    @JsonProperty("rooms")
    public void setRooms(List<String> value) { this.rooms = value; }

    @JsonProperty("taxonomies")
    public List<String> getTaxonomies() { return taxonomies; }
    @JsonProperty("taxonomies")
    public void setTaxonomies(List<String> value) { this.taxonomies = value; }
}