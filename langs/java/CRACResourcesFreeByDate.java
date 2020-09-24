package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class CRACResourcesFreeByDate {
    private CracCRACResourcesFreeByDateRequest request;
    private CracCRACResourcesFreeByDateResponse response;

    @JsonProperty("request")
    public CracCRACResourcesFreeByDateRequest getRequest() { return request; }
    @JsonProperty("request")
    public void setRequest(CracCRACResourcesFreeByDateRequest value) { this.request = value; }

    @JsonProperty("response")
    public CracCRACResourcesFreeByDateResponse getResponse() { return response; }
    @JsonProperty("response")
    public void setResponse(CracCRACResourcesFreeByDateResponse value) { this.response = value; }
}
