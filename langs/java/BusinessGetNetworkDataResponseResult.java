package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class BusinessGetNetworkDataResponseResult {
    private Map<String, Object> businessConfiguration;
    private List<TentacledBusiness> businesses;
    private List<String> clientVIPPhones;
    private List<Map<String, Object>> grantGroups;
    private String networkID;
    private Map<String, Object> networkInfo;
    private String networkName;
    private List<NetworkWidgetConfiguration> networkWidgetConfiguration;

    @JsonProperty("businessConfiguration")
    public Map<String, Object> getBusinessConfiguration() { return businessConfiguration; }
    @JsonProperty("businessConfiguration")
    public void setBusinessConfiguration(Map<String, Object> value) { this.businessConfiguration = value; }

    @JsonProperty("businesses")
    public List<TentacledBusiness> getBusinesses() { return businesses; }
    @JsonProperty("businesses")
    public void setBusinesses(List<TentacledBusiness> value) { this.businesses = value; }

    @JsonProperty("clientVIPPhones")
    public List<String> getClientVIPPhones() { return clientVIPPhones; }
    @JsonProperty("clientVIPPhones")
    public void setClientVIPPhones(List<String> value) { this.clientVIPPhones = value; }

    @JsonProperty("grantGroups")
    public List<Map<String, Object>> getGrantGroups() { return grantGroups; }
    @JsonProperty("grantGroups")
    public void setGrantGroups(List<Map<String, Object>> value) { this.grantGroups = value; }

    @JsonProperty("networkID")
    public String getNetworkID() { return networkID; }
    @JsonProperty("networkID")
    public void setNetworkID(String value) { this.networkID = value; }

    @JsonProperty("networkInfo")
    public Map<String, Object> getNetworkInfo() { return networkInfo; }
    @JsonProperty("networkInfo")
    public void setNetworkInfo(Map<String, Object> value) { this.networkInfo = value; }

    @JsonProperty("networkName")
    public String getNetworkName() { return networkName; }
    @JsonProperty("networkName")
    public void setNetworkName(String value) { this.networkName = value; }

    /**
     * настройки показа сети в зависимости от источника, на котором размещено приложение
     */
    @JsonProperty("networkWidgetConfiguration")
    public List<NetworkWidgetConfiguration> getNetworkWidgetConfiguration() { return networkWidgetConfiguration; }
    @JsonProperty("networkWidgetConfiguration")
    public void setNetworkWidgetConfiguration(List<NetworkWidgetConfiguration> value) { this.networkWidgetConfiguration = value; }
}
