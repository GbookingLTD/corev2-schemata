package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class GetNetworkData {
    private BusinessGetNetworkDataRequest request;
    private BusinessGetNetworkDataResponse response;

    @JsonProperty("request")
    public BusinessGetNetworkDataRequest getRequest() { return request; }
    @JsonProperty("request")
    public void setRequest(BusinessGetNetworkDataRequest value) { this.request = value; }

    @JsonProperty("response")
    public BusinessGetNetworkDataResponse getResponse() { return response; }
    @JsonProperty("response")
    public void setResponse(BusinessGetNetworkDataResponse value) { this.response = value; }
}
