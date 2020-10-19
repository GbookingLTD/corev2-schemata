package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;
import java.time.OffsetDateTime;

public class ParamsCreated {
    private OffsetDateTime end;
    private OffsetDateTime start;

    @JsonProperty("end")
    public OffsetDateTime getEnd() { return end; }
    @JsonProperty("end")
    public void setEnd(OffsetDateTime value) { this.end = value; }

    @JsonProperty("start")
    public OffsetDateTime getStart() { return start; }
    @JsonProperty("start")
    public void setStart(OffsetDateTime value) { this.start = value; }
}
