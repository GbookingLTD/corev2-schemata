package ru.gbooking.apiv2;

import java.util.*;

public class AddClient {
    private ClientAddClientRequest request;
    private ClientAddClientResponse response;

    public ClientAddClientRequest getRequest() { return request; }
    public void setRequest(ClientAddClientRequest value) { this.request = value; }

    public ClientAddClientResponse getResponse() { return response; }
    public void setResponse(ClientAddClientResponse value) { this.response = value; }
}
