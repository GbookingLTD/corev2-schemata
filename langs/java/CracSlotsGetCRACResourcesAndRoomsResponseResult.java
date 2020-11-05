package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;
import java.util.List;

public class CracSlotsGetCRACResourcesAndRoomsResponseResult {
    private List<CracDaySchedule> slots;

    @JsonProperty("slots")
    public List<CracDaySchedule> getSlots() { return slots; }
    @JsonProperty("slots")
    public void setSlots(List<CracDaySchedule> value) { this.slots = value; }
}
