package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class CracCRACDistributedResourcesFreeByDateResponseResult {
    private List<PurpleFree> free;

    @JsonProperty("Free")
    public List<PurpleFree> getFree() { return free; }
    @JsonProperty("Free")
    public void setFree(List<PurpleFree> value) { this.free = value; }
}
