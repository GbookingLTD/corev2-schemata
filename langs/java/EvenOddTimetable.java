package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class EvenOddTimetable {
    private List<TimeFrame> even;
    private List<TimeFrame> odd;
    private StartPeriod startPeriod;

    /**
     * расписание для чётных дней
     */
    @JsonProperty("even")
    public List<TimeFrame> getEven() { return even; }
    @JsonProperty("even")
    public void setEven(List<TimeFrame> value) { this.even = value; }

    /**
     * расписание для нечётных дней
     */
    @JsonProperty("odd")
    public List<TimeFrame> getOdd() { return odd; }
    @JsonProperty("odd")
    public void setOdd(List<TimeFrame> value) { this.odd = value; }

    /**
     * month - по дням месяца (1-е число каждого месяца - нечётно), week - по дням недели
     * (понедельник считается нечётным)
     */
    @JsonProperty("startPeriod")
    public StartPeriod getStartPeriod() { return startPeriod; }
    @JsonProperty("startPeriod")
    public void setStartPeriod(StartPeriod value) { this.startPeriod = value; }
}
