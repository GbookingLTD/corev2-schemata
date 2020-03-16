package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class FindOrCreateClient {
    private ClientFindOrCreateClientRequest request;
    private ClientFindOfCreateClientResponse response;

    @JsonProperty("request")
    public ClientFindOrCreateClientRequest getRequest() { return request; }
    @JsonProperty("request")
    public void setRequest(ClientFindOrCreateClientRequest value) { this.request = value; }

    @JsonProperty("response")
    public ClientFindOfCreateClientResponse getResponse() { return response; }
    @JsonProperty("response")
    public void setResponse(ClientFindOfCreateClientResponse value) { this.response = value; }
}
