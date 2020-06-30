package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;
import java.util.List;

public class SlotResource {
    private List<CracCutSlot> cutSlots;
    private String resourceID;

    @JsonProperty("cutSlots")
    public List<CracCutSlot> getCutSlots() { return cutSlots; }
    @JsonProperty("cutSlots")
    public void setCutSlots(List<CracCutSlot> value) { this.cutSlots = value; }

    @JsonProperty("resourceId")
    public String getResourceID() { return resourceID; }
    @JsonProperty("resourceId")
    public void setResourceID(String value) { this.resourceID = value; }
}
