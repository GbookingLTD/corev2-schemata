package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;
import java.util.List;

public class CracCRACResourcesFreeByDateV2ResponseResult {
    private List<TentacledFree> free;

    @JsonProperty("Free")
    public List<TentacledFree> getFree() { return free; }
    @JsonProperty("Free")
    public void setFree(List<TentacledFree> value) { this.free = value; }
}
