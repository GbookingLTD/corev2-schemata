package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class FluffyAppointment {
    private String clientID;
    private String id;
    private String shortID;

    @JsonProperty("clientID")
    public String getClientID() { return clientID; }
    @JsonProperty("clientID")
    public void setClientID(String value) { this.clientID = value; }

    @JsonProperty("id")
    public String getID() { return id; }
    @JsonProperty("id")
    public void setID(String value) { this.id = value; }

    @JsonProperty("shortId")
    public String getShortID() { return shortID; }
    @JsonProperty("shortId")
    public void setShortID(String value) { this.shortID = value; }
}
