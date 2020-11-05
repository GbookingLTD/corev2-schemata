package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;
import java.util.List;

public class CracCRACResourcesFreeByDateResponseResult {
    private List<FluffyFree> free;

    @JsonProperty("Free")
    public List<FluffyFree> getFree() { return free; }
    @JsonProperty("Free")
    public void setFree(List<FluffyFree> value) { this.free = value; }
}
