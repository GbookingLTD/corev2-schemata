package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class UpdateClientInfo {
    private ClientUpdateClientInfoRequest request;
    private ClientUpdateClientInfoResponse response;

    @JsonProperty("request")
    public ClientUpdateClientInfoRequest getRequest() { return request; }
    @JsonProperty("request")
    public void setRequest(ClientUpdateClientInfoRequest value) { this.request = value; }

    @JsonProperty("response")
    public ClientUpdateClientInfoResponse getResponse() { return response; }
    @JsonProperty("response")
    public void setResponse(ClientUpdateClientInfoResponse value) { this.response = value; }
}
