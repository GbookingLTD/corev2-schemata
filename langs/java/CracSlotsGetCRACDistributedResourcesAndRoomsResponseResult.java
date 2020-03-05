package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class CracSlotsGetCRACDistributedResourcesAndRoomsResponseResult {
    private List<PurpleSlot> slots;

    @JsonProperty("slots")
    public List<PurpleSlot> getSlots() { return slots; }
    @JsonProperty("slots")
    public void setSlots(List<PurpleSlot> value) { this.slots = value; }
}
