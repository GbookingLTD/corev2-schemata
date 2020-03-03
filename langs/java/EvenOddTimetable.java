package ru.gbooking.apiv2;

import java.util.*;

public class EvenOddTimetable {
    private List<TimeFrame> even;
    private List<TimeFrame> odd;
    private StartPeriod startPeriod;

    /**
     * расписание для чётных дней
     */
    public List<TimeFrame> getEven() { return even; }
    public void setEven(List<TimeFrame> value) { this.even = value; }

    /**
     * расписание для нечётных дней
     */
    public List<TimeFrame> getOdd() { return odd; }
    public void setOdd(List<TimeFrame> value) { this.odd = value; }

    /**
     * month - по дням месяца (1-е число каждого месяца - нечётно), week - по дням недели
     * (понедельник считается нечётным)
     */
    public StartPeriod getStartPeriod() { return startPeriod; }
    public void setStartPeriod(StartPeriod value) { this.startPeriod = value; }
}
