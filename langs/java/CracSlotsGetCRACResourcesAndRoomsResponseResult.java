package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class CracSlotsGetCRACResourcesAndRoomsResponseResult {
    private List<CracDaySchedule> slots;

    @JsonProperty("slots")
    public List<CracDaySchedule> getSlots() { return slots; }
    @JsonProperty("slots")
    public void setSlots(List<CracDaySchedule> value) { this.slots = value; }
}
