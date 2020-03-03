package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class SlotsProperties {
    private GeneralInfo time;

    @JsonProperty("time")
    public GeneralInfo getTime() { return time; }
    @JsonProperty("time")
    public void setTime(GeneralInfo value) { this.time = value; }
}
