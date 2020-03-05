package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class FluffyFilters {
    private FluffyDate date;
    private String insuranceID;
    private List<String> rooms;
    private List<String> taxonomies;

    @JsonProperty("date")
    public FluffyDate getDate() { return date; }
    @JsonProperty("date")
    public void setDate(FluffyDate value) { this.date = value; }

    @JsonProperty("insuranceID")
    public String getInsuranceID() { return insuranceID; }
    @JsonProperty("insuranceID")
    public void setInsuranceID(String value) { this.insuranceID = value; }

    @JsonProperty("rooms")
    public List<String> getRooms() { return rooms; }
    @JsonProperty("rooms")
    public void setRooms(List<String> value) { this.rooms = value; }

    @JsonProperty("taxonomies")
    public List<String> getTaxonomies() { return taxonomies; }
    @JsonProperty("taxonomies")
    public void setTaxonomies(List<String> value) { this.taxonomies = value; }
}
