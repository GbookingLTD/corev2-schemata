package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class TentacledSlot {
    private String date;
    private List<Object> resources;
    private List<Map<String, Object>> rooms;

    @JsonProperty("date")
    public String getDate() { return date; }
    @JsonProperty("date")
    public void setDate(String value) { this.date = value; }

    @JsonProperty("resources")
    public List<Object> getResources() { return resources; }
    @JsonProperty("resources")
    public void setResources(List<Object> value) { this.resources = value; }

    @JsonProperty("rooms")
    public List<Map<String, Object>> getRooms() { return rooms; }
    @JsonProperty("rooms")
    public void setRooms(List<Map<String, Object>> value) { this.rooms = value; }
}
