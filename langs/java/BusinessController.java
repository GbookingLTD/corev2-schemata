package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class BusinessController {
    private GetNetworkData getNetworkData;
    private GetProfileByID getProfileByID;

    @JsonProperty("get_network_data")
    public GetNetworkData getGetNetworkData() { return getNetworkData; }
    @JsonProperty("get_network_data")
    public void setGetNetworkData(GetNetworkData value) { this.getNetworkData = value; }

    @JsonProperty("get_profile_by_id")
    public GetProfileByID getGetProfileByID() { return getProfileByID; }
    @JsonProperty("get_profile_by_id")
    public void setGetProfileByID(GetProfileByID value) { this.getProfileByID = value; }
}
