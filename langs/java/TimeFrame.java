package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class TimeFrame {
    private Double capacity;
    private double end;
    private EvenTimeFrameDate endDate;
    private String extraID;
    private String id;
    private List<String> resources;
    private String roomID;
    private double start;
    private EvenTimeFrameDate startDate;

    @JsonProperty("capacity")
    public Double getCapacity() { return capacity; }
    @JsonProperty("capacity")
    public void setCapacity(Double value) { this.capacity = value; }

    /**
     * смещение в минутах от начала дня
     */
    @JsonProperty("end")
    public double getEnd() { return end; }
    @JsonProperty("end")
    public void setEnd(double value) { this.end = value; }

    @JsonProperty("endDate")
    public EvenTimeFrameDate getEndDate() { return endDate; }
    @JsonProperty("endDate")
    public void setEndDate(EvenTimeFrameDate value) { this.endDate = value; }

    @JsonProperty("extraId")
    public String getExtraID() { return extraID; }
    @JsonProperty("extraId")
    public void setExtraID(String value) { this.extraID = value; }

    /**
     * уникальный идентификатор временного слота
     */
    @JsonProperty("id")
    public String getID() { return id; }
    @JsonProperty("id")
    public void setID(String value) { this.id = value; }

    @JsonProperty("resources")
    public List<String> getResources() { return resources; }
    @JsonProperty("resources")
    public void setResources(List<String> value) { this.resources = value; }

    @JsonProperty("roomID")
    public String getRoomID() { return roomID; }
    @JsonProperty("roomID")
    public void setRoomID(String value) { this.roomID = value; }

    /**
     * смещение в минутах от начала дня
     */
    @JsonProperty("start")
    public double getStart() { return start; }
    @JsonProperty("start")
    public void setStart(double value) { this.start = value; }

    @JsonProperty("startDate")
    public EvenTimeFrameDate getStartDate() { return startDate; }
    @JsonProperty("startDate")
    public void setStartDate(EvenTimeFrameDate value) { this.startDate = value; }
}
