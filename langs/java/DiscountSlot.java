package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class DiscountSlot {
    private TimeFrame time;

    @JsonProperty("time")
    public TimeFrame getTime() { return time; }
    @JsonProperty("time")
    public void setTime(TimeFrame value) { this.time = value; }
}
