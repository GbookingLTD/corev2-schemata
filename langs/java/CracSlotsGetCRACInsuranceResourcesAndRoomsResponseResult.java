package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class CracSlotsGetCRACInsuranceResourcesAndRoomsResponseResult {
    private List<FluffySlot> slots;

    @JsonProperty("slots")
    public List<FluffySlot> getSlots() { return slots; }
    @JsonProperty("slots")
    public void setSlots(List<FluffySlot> value) { this.slots = value; }
}
