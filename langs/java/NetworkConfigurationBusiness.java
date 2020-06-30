package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class NetworkConfigurationBusiness {
    private String id;
    private boolean active;
    private String internalID;

    @JsonProperty("_id")
    public String getID() { return id; }
    @JsonProperty("_id")
    public void setID(String value) { this.id = value; }

    @JsonProperty("active")
    public boolean getActive() { return active; }
    @JsonProperty("active")
    public void setActive(boolean value) { this.active = value; }

    @JsonProperty("internalID")
    public String getInternalID() { return internalID; }
    @JsonProperty("internalID")
    public void setInternalID(String value) { this.internalID = value; }
}
