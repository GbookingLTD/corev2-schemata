package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class BookableDateRangesProperties {
    private ChiangMaiGoose enabled;
    private End start;
    private End end;

    @JsonProperty("enabled")
    public ChiangMaiGoose getEnabled() { return enabled; }
    @JsonProperty("enabled")
    public void setEnabled(ChiangMaiGoose value) { this.enabled = value; }

    @JsonProperty("start")
    public End getStart() { return start; }
    @JsonProperty("start")
    public void setStart(End value) { this.start = value; }

    @JsonProperty("end")
    public End getEnd() { return end; }
    @JsonProperty("end")
    public void setEnd(End value) { this.end = value; }
}
