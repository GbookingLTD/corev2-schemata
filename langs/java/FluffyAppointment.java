package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class FluffyAppointment {
    private String id;
    private String shortID;

    @JsonProperty("id")
    public String getID() { return id; }
    @JsonProperty("id")
    public void setID(String value) { this.id = value; }

    @JsonProperty("shortId")
    public String getShortID() { return shortID; }
    @JsonProperty("shortId")
    public void setShortID(String value) { this.shortID = value; }
}
