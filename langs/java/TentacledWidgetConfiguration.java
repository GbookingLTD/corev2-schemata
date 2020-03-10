package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class TentacledWidgetConfiguration {
    private String cracServer;
    private Boolean mostFreeEnable;

    @JsonProperty("cracServer")
    public String getCracServer() { return cracServer; }
    @JsonProperty("cracServer")
    public void setCracServer(String value) { this.cracServer = value; }

    @JsonProperty("mostFreeEnable")
    public Boolean getMostFreeEnable() { return mostFreeEnable; }
    @JsonProperty("mostFreeEnable")
    public void setMostFreeEnable(Boolean value) { this.mostFreeEnable = value; }
}
