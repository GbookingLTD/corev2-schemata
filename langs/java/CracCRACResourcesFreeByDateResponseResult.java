package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class CracCRACResourcesFreeByDateResponseResult {
    private List<FluffyFree> free;

    @JsonProperty("Free")
    public List<FluffyFree> getFree() { return free; }
    @JsonProperty("Free")
    public void setFree(List<FluffyFree> value) { this.free = value; }
}
