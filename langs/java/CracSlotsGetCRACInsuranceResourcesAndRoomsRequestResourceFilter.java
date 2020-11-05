package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class CracSlotsGetCRACInsuranceResourcesAndRoomsRequestResourceFilter {
    private double duration;
    private String id;

    @JsonProperty("duration")
    public double getDuration() { return duration; }
    @JsonProperty("duration")
    public void setDuration(double value) { this.duration = value; }

    /**
     * идентификатор ресурса
     */
    @JsonProperty("id")
    public String getID() { return id; }
    @JsonProperty("id")
    public void setID(String value) { this.id = value; }
}
