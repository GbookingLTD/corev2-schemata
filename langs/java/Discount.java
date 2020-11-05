package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;
import java.time.OffsetDateTime;
import java.util.List;

/**
 * Информация о скидке
 */
public class Discount {
    private Boolean active;
    private List<Day> days;
    private Repeats repeats;
    private List<DiscountSlot> slots;
    private OffsetDateTime start;
    private Boolean unlimWeeklyRepeat;
    private Double weeklyRepeat;

    @JsonProperty("active")
    public Boolean getActive() { return active; }
    @JsonProperty("active")
    public void setActive(Boolean value) { this.active = value; }

    @JsonProperty("days")
    public List<Day> getDays() { return days; }
    @JsonProperty("days")
    public void setDays(List<Day> value) { this.days = value; }

    @JsonProperty("repeats")
    public Repeats getRepeats() { return repeats; }
    @JsonProperty("repeats")
    public void setRepeats(Repeats value) { this.repeats = value; }

    @JsonProperty("slots")
    public List<DiscountSlot> getSlots() { return slots; }
    @JsonProperty("slots")
    public void setSlots(List<DiscountSlot> value) { this.slots = value; }

    @JsonProperty("start")
    public OffsetDateTime getStart() { return start; }
    @JsonProperty("start")
    public void setStart(OffsetDateTime value) { this.start = value; }

    @JsonProperty("unlimWeeklyRepeat")
    public Boolean getUnlimWeeklyRepeat() { return unlimWeeklyRepeat; }
    @JsonProperty("unlimWeeklyRepeat")
    public void setUnlimWeeklyRepeat(Boolean value) { this.unlimWeeklyRepeat = value; }

    @JsonProperty("weeklyRepeat")
    public Double getWeeklyRepeat() { return weeklyRepeat; }
    @JsonProperty("weeklyRepeat")
    public void setWeeklyRepeat(Double value) { this.weeklyRepeat = value; }
}
