package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class GetProfileByID {
    private BusinessGetProfileByIDRequest request;
    private BusinessGetProfileByIDResponse response;

    @JsonProperty("request")
    public BusinessGetProfileByIDRequest getRequest() { return request; }
    @JsonProperty("request")
    public void setRequest(BusinessGetProfileByIDRequest value) { this.request = value; }

    @JsonProperty("response")
    public BusinessGetProfileByIDResponse getResponse() { return response; }
    @JsonProperty("response")
    public void setResponse(BusinessGetProfileByIDResponse value) { this.response = value; }
}
