package ru.gbooking.apiv2;

import java.util.*;

public class TimeFrame {
    private Double capacity;
    private double end;
    private PurpleTimeFrameDate endDate;
    private String extraID;
    private String id;
    private List<String> resources;
    private String roomID;
    private double start;
    private PurpleTimeFrameDate startDate;

    public Double getCapacity() { return capacity; }
    public void setCapacity(Double value) { this.capacity = value; }

    /**
     * смещение в минутах от начала дня
     */
    public double getEnd() { return end; }
    public void setEnd(double value) { this.end = value; }

    public PurpleTimeFrameDate getEndDate() { return endDate; }
    public void setEndDate(PurpleTimeFrameDate value) { this.endDate = value; }

    public String getExtraID() { return extraID; }
    public void setExtraID(String value) { this.extraID = value; }

    /**
     * уникальный идентификатор временного слота
     */
    public String getID() { return id; }
    public void setID(String value) { this.id = value; }

    public List<String> getResources() { return resources; }
    public void setResources(List<String> value) { this.resources = value; }

    public String getRoomID() { return roomID; }
    public void setRoomID(String value) { this.roomID = value; }

    /**
     * смещение в минутах от начала дня
     */
    public double getStart() { return start; }
    public void setStart(double value) { this.start = value; }

    public PurpleTimeFrameDate getStartDate() { return startDate; }
    public void setStartDate(PurpleTimeFrameDate value) { this.startDate = value; }
}
