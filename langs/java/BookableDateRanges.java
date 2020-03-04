package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class BookableDateRanges {
    private Boolean enabled;
    private Object end;
    private Object start;

    @JsonProperty("enabled")
    public Boolean getEnabled() { return enabled; }
    @JsonProperty("enabled")
    public void setEnabled(Boolean value) { this.enabled = value; }

    @JsonProperty("end")
    public Object getEnd() { return end; }
    @JsonProperty("end")
    public void setEnd(Object value) { this.end = value; }

    @JsonProperty("start")
    public Object getStart() { return start; }
    @JsonProperty("start")
    public void setStart(Object value) { this.start = value; }
}
