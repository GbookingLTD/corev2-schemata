package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class ClientFavResource {
    private double businessID;
    private String networkID;
    private String resourceID;

    @JsonProperty("businessID")
    public double getBusinessID() { return businessID; }
    @JsonProperty("businessID")
    public void setBusinessID(double value) { this.businessID = value; }

    @JsonProperty("networkID")
    public String getNetworkID() { return networkID; }
    @JsonProperty("networkID")
    public void setNetworkID(String value) { this.networkID = value; }

    @JsonProperty("resourceID")
    public String getResourceID() { return resourceID; }
    @JsonProperty("resourceID")
    public void setResourceID(String value) { this.resourceID = value; }
}
