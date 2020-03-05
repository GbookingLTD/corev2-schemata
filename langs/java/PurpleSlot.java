package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class PurpleSlot {
    private List<PurpleCutSlot> cutSlots;
    private String resourceID;

    @JsonProperty("cutSlots")
    public List<PurpleCutSlot> getCutSlots() { return cutSlots; }
    @JsonProperty("cutSlots")
    public void setCutSlots(List<PurpleCutSlot> value) { this.cutSlots = value; }

    @JsonProperty("resourceId")
    public String getResourceID() { return resourceID; }
    @JsonProperty("resourceId")
    public void setResourceID(String value) { this.resourceID = value; }
}
