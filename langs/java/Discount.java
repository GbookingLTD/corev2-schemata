package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

/**
 * Информация о скидке
 */
public class Discount {
    private Boolean active;
    private DaysOfWeek daysOfWeek;
    private Repeats repeats;
    private Slots slots;
    private String start;
    private Boolean unlimWeeklyRepeat;
    private Double weeklyRepeat;

    @JsonProperty("active")
    public Boolean getActive() { return active; }
    @JsonProperty("active")
    public void setActive(Boolean value) { this.active = value; }

    @JsonProperty("daysOfWeek")
    public DaysOfWeek getDaysOfWeek() { return daysOfWeek; }
    @JsonProperty("daysOfWeek")
    public void setDaysOfWeek(DaysOfWeek value) { this.daysOfWeek = value; }

    @JsonProperty("repeats")
    public Repeats getRepeats() { return repeats; }
    @JsonProperty("repeats")
    public void setRepeats(Repeats value) { this.repeats = value; }

    @JsonProperty("slots")
    public Slots getSlots() { return slots; }
    @JsonProperty("slots")
    public void setSlots(Slots value) { this.slots = value; }

    @JsonProperty("start")
    public String getStart() { return start; }
    @JsonProperty("start")
    public void setStart(String value) { this.start = value; }

    @JsonProperty("unlimWeeklyRepeat")
    public Boolean getUnlimWeeklyRepeat() { return unlimWeeklyRepeat; }
    @JsonProperty("unlimWeeklyRepeat")
    public void setUnlimWeeklyRepeat(Boolean value) { this.unlimWeeklyRepeat = value; }

    @JsonProperty("weeklyRepeat")
    public Double getWeeklyRepeat() { return weeklyRepeat; }
    @JsonProperty("weeklyRepeat")
    public void setWeeklyRepeat(Double value) { this.weeklyRepeat = value; }
}
