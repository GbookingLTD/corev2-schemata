package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class AddClient {
    private ClientAddClientRequest request;
    private ClientAddClientResponse response;

    @JsonProperty("request")
    public ClientAddClientRequest getRequest() { return request; }
    @JsonProperty("request")
    public void setRequest(ClientAddClientRequest value) { this.request = value; }

    @JsonProperty("response")
    public ClientAddClientResponse getResponse() { return response; }
    @JsonProperty("response")
    public void setResponse(ClientAddClientResponse value) { this.response = value; }
}
