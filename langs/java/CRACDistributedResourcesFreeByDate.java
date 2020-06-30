package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class CRACDistributedResourcesFreeByDate {
    private CracCRACDistributedResourcesFreeByDateRequest request;
    private CracCRACDistributedResourcesFreeByDateResponse response;

    @JsonProperty("request")
    public CracCRACDistributedResourcesFreeByDateRequest getRequest() { return request; }
    @JsonProperty("request")
    public void setRequest(CracCRACDistributedResourcesFreeByDateRequest value) { this.request = value; }

    @JsonProperty("response")
    public CracCRACDistributedResourcesFreeByDateResponse getResponse() { return response; }
    @JsonProperty("response")
    public void setResponse(CracCRACDistributedResourcesFreeByDateResponse value) { this.response = value; }
}
