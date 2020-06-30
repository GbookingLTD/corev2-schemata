package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class UpdateClient {
    private ClientUpdateClientRequest request;
    private ClientUpdateClientResponse response;

    @JsonProperty("request")
    public ClientUpdateClientRequest getRequest() { return request; }
    @JsonProperty("request")
    public void setRequest(ClientUpdateClientRequest value) { this.request = value; }

    @JsonProperty("response")
    public ClientUpdateClientResponse getResponse() { return response; }
    @JsonProperty("response")
    public void setResponse(ClientUpdateClientResponse value) { this.response = value; }
}
