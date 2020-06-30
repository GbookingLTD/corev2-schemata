package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class CRACResourcesFreeByDateV2 {
    private CracCRACResourcesFreeByDateV2Request request;
    private CracCRACResourcesFreeByDateV2Response response;

    @JsonProperty("request")
    public CracCRACResourcesFreeByDateV2Request getRequest() { return request; }
    @JsonProperty("request")
    public void setRequest(CracCRACResourcesFreeByDateV2Request value) { this.request = value; }

    @JsonProperty("response")
    public CracCRACResourcesFreeByDateV2Response getResponse() { return response; }
    @JsonProperty("response")
    public void setResponse(CracCRACResourcesFreeByDateV2Response value) { this.response = value; }
}
