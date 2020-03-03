package ru.gbooking.apiv2;

import java.util.*;

/**
 * таблица регулярного недельного расписания
 */
public class Timetable {
    private Boolean active;
    private Week week;

    /**
     * установлено ли расписание для сущности
     */
    public Boolean getActive() { return active; }
    public void setActive(Boolean value) { this.active = value; }

    public Week getWeek() { return week; }
    public void setWeek(Week value) { this.week = value; }
}
