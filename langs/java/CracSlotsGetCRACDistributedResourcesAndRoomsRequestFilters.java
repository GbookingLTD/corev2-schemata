package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;
import java.util.List;

public class CracSlotsGetCRACDistributedResourcesAndRoomsRequestFilters {
    private PurpleDate date;
    private List<CracSlotsGetCRACDistributedResourcesAndRoomsRequestResourceFilter> resources;
    private List<String> rooms;
    private List<String> taxonomies;

    @JsonProperty("date")
    public PurpleDate getDate() { return date; }
    @JsonProperty("date")
    public void setDate(PurpleDate value) { this.date = value; }

    @JsonProperty("resources")
    public List<CracSlotsGetCRACDistributedResourcesAndRoomsRequestResourceFilter> getResources() { return resources; }
    @JsonProperty("resources")
    public void setResources(List<CracSlotsGetCRACDistributedResourcesAndRoomsRequestResourceFilter> value) { this.resources = value; }

    @JsonProperty("rooms")
    public List<String> getRooms() { return rooms; }
    @JsonProperty("rooms")
    public void setRooms(List<String> value) { this.rooms = value; }

    @JsonProperty("taxonomies")
    public List<String> getTaxonomies() { return taxonomies; }
    @JsonProperty("taxonomies")
    public void setTaxonomies(List<String> value) { this.taxonomies = value; }
}
