package ru.gbooking.apiv2;

import java.util.*;

public class DiscountClass {
    private Boolean active;
    private DaysOfWeek daysOfWeek;
    private Repeats repeats;
    private Slots slots;
    private String start;
    private Boolean unlimWeeklyRepeat;
    private Double weeklyRepeat;

    public Boolean getActive() { return active; }
    public void setActive(Boolean value) { this.active = value; }

    public DaysOfWeek getDaysOfWeek() { return daysOfWeek; }
    public void setDaysOfWeek(DaysOfWeek value) { this.daysOfWeek = value; }

    public Repeats getRepeats() { return repeats; }
    public void setRepeats(Repeats value) { this.repeats = value; }

    public Slots getSlots() { return slots; }
    public void setSlots(Slots value) { this.slots = value; }

    public String getStart() { return start; }
    public void setStart(String value) { this.start = value; }

    public Boolean getUnlimWeeklyRepeat() { return unlimWeeklyRepeat; }
    public void setUnlimWeeklyRepeat(Boolean value) { this.unlimWeeklyRepeat = value; }

    public Double getWeeklyRepeat() { return weeklyRepeat; }
    public void setWeeklyRepeat(Double value) { this.weeklyRepeat = value; }
}
