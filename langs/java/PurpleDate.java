package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class PurpleDate {
    private String from;
    private String to;

    @JsonProperty("from")
    public String getFrom() { return from; }
    @JsonProperty("from")
    public void setFrom(String value) { this.from = value; }

    @JsonProperty("to")
    public String getTo() { return to; }
    @JsonProperty("to")
    public void setTo(String value) { this.to = value; }
}
