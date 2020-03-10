package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class FluffyFilters {
    private FluffyDate date;
    private String insuranceID;
    private List<FluffyResourceFilter> resources;
    private List<String> rooms;

    @JsonProperty("date")
    public FluffyDate getDate() { return date; }
    @JsonProperty("date")
    public void setDate(FluffyDate value) { this.date = value; }

    @JsonProperty("insuranceID")
    public String getInsuranceID() { return insuranceID; }
    @JsonProperty("insuranceID")
    public void setInsuranceID(String value) { this.insuranceID = value; }

    @JsonProperty("resources")
    public List<FluffyResourceFilter> getResources() { return resources; }
    @JsonProperty("resources")
    public void setResources(List<FluffyResourceFilter> value) { this.resources = value; }

    @JsonProperty("rooms")
    public List<String> getRooms() { return rooms; }
    @JsonProperty("rooms")
    public void setRooms(List<String> value) { this.rooms = value; }
}
