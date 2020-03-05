package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class TentacledSlot {
    private List<TentacledCutSlot> cutSlots;
    private String resourceID;

    @JsonProperty("cutSlots")
    public List<TentacledCutSlot> getCutSlots() { return cutSlots; }
    @JsonProperty("cutSlots")
    public void setCutSlots(List<TentacledCutSlot> value) { this.cutSlots = value; }

    @JsonProperty("resourceId")
    public String getResourceID() { return resourceID; }
    @JsonProperty("resourceId")
    public void setResourceID(String value) { this.resourceID = value; }
}
