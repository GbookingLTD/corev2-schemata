package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class FluffyCreated {
    private String end;
    private String start;

    @JsonProperty("end")
    public String getEnd() { return end; }
    @JsonProperty("end")
    public void setEnd(String value) { this.end = value; }

    @JsonProperty("start")
    public String getStart() { return start; }
    @JsonProperty("start")
    public void setStart(String value) { this.start = value; }
}
