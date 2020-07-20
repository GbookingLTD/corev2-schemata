package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class IndigoAppointment {
    private Double duration;
    private FluffyPrice price;
    private String start;

    @JsonProperty("duration")
    public Double getDuration() { return duration; }
    @JsonProperty("duration")
    public void setDuration(Double value) { this.duration = value; }

    @JsonProperty("price")
    public FluffyPrice getPrice() { return price; }
    @JsonProperty("price")
    public void setPrice(FluffyPrice value) { this.price = value; }

    @JsonProperty("start")
    public String getStart() { return start; }
    @JsonProperty("start")
    public void setStart(String value) { this.start = value; }
}
