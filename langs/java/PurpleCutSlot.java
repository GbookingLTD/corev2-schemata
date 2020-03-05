package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class PurpleCutSlot {
    private boolean available;
    private double duration;
    private double end;
    private double start;

    @JsonProperty("available")
    public boolean getAvailable() { return available; }
    @JsonProperty("available")
    public void setAvailable(boolean value) { this.available = value; }

    @JsonProperty("duration")
    public double getDuration() { return duration; }
    @JsonProperty("duration")
    public void setDuration(double value) { this.duration = value; }

    @JsonProperty("end")
    public double getEnd() { return end; }
    @JsonProperty("end")
    public void setEnd(double value) { this.end = value; }

    @JsonProperty("start")
    public double getStart() { return start; }
    @JsonProperty("start")
    public void setStart(double value) { this.start = value; }
}
