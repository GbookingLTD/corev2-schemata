package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class IndigoWidgetConfiguration {
    private String cracServer;

    @JsonProperty("cracServer")
    public String getCracServer() { return cracServer; }
    @JsonProperty("cracServer")
    public void setCracServer(String value) { this.cracServer = value; }
}
