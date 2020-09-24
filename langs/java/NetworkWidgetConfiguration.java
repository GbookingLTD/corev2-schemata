package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class NetworkWidgetConfiguration {
    private String id;
    private List<NetworkConfigurationBusiness> businesses;
    private String defaultServiceID;
    private boolean showBranchSelector;
    private boolean showDefaultService;
    private boolean showOnMap;
    private String source;

    @JsonProperty("_id")
    public String getID() { return id; }
    @JsonProperty("_id")
    public void setID(String value) { this.id = value; }

    @JsonProperty("businesses")
    public List<NetworkConfigurationBusiness> getBusinesses() { return businesses; }
    @JsonProperty("businesses")
    public void setBusinesses(List<NetworkConfigurationBusiness> value) { this.businesses = value; }

    @JsonProperty("defaultServiceID")
    public String getDefaultServiceID() { return defaultServiceID; }
    @JsonProperty("defaultServiceID")
    public void setDefaultServiceID(String value) { this.defaultServiceID = value; }

    @JsonProperty("showBranchSelector")
    public boolean getShowBranchSelector() { return showBranchSelector; }
    @JsonProperty("showBranchSelector")
    public void setShowBranchSelector(boolean value) { this.showBranchSelector = value; }

    @JsonProperty("showDefaultService")
    public boolean getShowDefaultService() { return showDefaultService; }
    @JsonProperty("showDefaultService")
    public void setShowDefaultService(boolean value) { this.showDefaultService = value; }

    @JsonProperty("showOnMap")
    public boolean getShowOnMap() { return showOnMap; }
    @JsonProperty("showOnMap")
    public void setShowOnMap(boolean value) { this.showOnMap = value; }

    @JsonProperty("source")
    public String getSource() { return source; }
    @JsonProperty("source")
    public void setSource(String value) { this.source = value; }
}
