package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class ScheduleSplitDayTimeInterval {
    private String id;
    private Double endHour;
    private Double endMinute;
    private Double schedulerTick;
    private Boolean selected;
    private Double startHour;
    private Double startMinute;
    private String title;

    @JsonProperty("_id")
    public String getID() { return id; }
    @JsonProperty("_id")
    public void setID(String value) { this.id = value; }

    @JsonProperty("endHour")
    public Double getEndHour() { return endHour; }
    @JsonProperty("endHour")
    public void setEndHour(Double value) { this.endHour = value; }

    @JsonProperty("endMinute")
    public Double getEndMinute() { return endMinute; }
    @JsonProperty("endMinute")
    public void setEndMinute(Double value) { this.endMinute = value; }

    @JsonProperty("schedulerTick")
    public Double getSchedulerTick() { return schedulerTick; }
    @JsonProperty("schedulerTick")
    public void setSchedulerTick(Double value) { this.schedulerTick = value; }

    @JsonProperty("selected")
    public Boolean getSelected() { return selected; }
    @JsonProperty("selected")
    public void setSelected(Boolean value) { this.selected = value; }

    @JsonProperty("startHour")
    public Double getStartHour() { return startHour; }
    @JsonProperty("startHour")
    public void setStartHour(Double value) { this.startHour = value; }

    @JsonProperty("startMinute")
    public Double getStartMinute() { return startMinute; }
    @JsonProperty("startMinute")
    public void setStartMinute(Double value) { this.startMinute = value; }

    @JsonProperty("title")
    public String getTitle() { return title; }
    @JsonProperty("title")
    public void setTitle(String value) { this.title = value; }
}
