package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class CracSlotsGetCRACResourcesAndRoomsResponseResult {
    private List<TentacledSlot> slots;

    @JsonProperty("slots")
    public List<TentacledSlot> getSlots() { return slots; }
    @JsonProperty("slots")
    public void setSlots(List<TentacledSlot> value) { this.slots = value; }
}
