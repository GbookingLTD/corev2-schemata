package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;
import java.time.OffsetDateTime;

public class TentacledDate {
    private OffsetDateTime from;
    private OffsetDateTime to;

    @JsonProperty("from")
    public OffsetDateTime getFrom() { return from; }
    @JsonProperty("from")
    public void setFrom(OffsetDateTime value) { this.from = value; }

    @JsonProperty("to")
    public OffsetDateTime getTo() { return to; }
    @JsonProperty("to")
    public void setTo(OffsetDateTime value) { this.to = value; }
}
