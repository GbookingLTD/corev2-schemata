package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

/**
 * таблица регулярного недельного расписания
 */
public class Timetable {
    private Boolean active;
    private Week week;

    /**
     * установлено ли расписание для сущности
     */
    @JsonProperty("active")
    public Boolean getActive() { return active; }
    @JsonProperty("active")
    public void setActive(Boolean value) { this.active = value; }

    @JsonProperty("week")
    public Week getWeek() { return week; }
    @JsonProperty("week")
    public void setWeek(Week value) { this.week = value; }
}
