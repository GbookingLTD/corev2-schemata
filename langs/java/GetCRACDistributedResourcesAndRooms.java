package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class GetCRACDistributedResourcesAndRooms {
    private CracSlotsGetCRACDistributedResourcesAndRoomsRequest request;
    private CracSlotsGetCRACDistributedResourcesAndRoomsResponse response;

    @JsonProperty("request")
    public CracSlotsGetCRACDistributedResourcesAndRoomsRequest getRequest() { return request; }
    @JsonProperty("request")
    public void setRequest(CracSlotsGetCRACDistributedResourcesAndRoomsRequest value) { this.request = value; }

    @JsonProperty("response")
    public CracSlotsGetCRACDistributedResourcesAndRoomsResponse getResponse() { return response; }
    @JsonProperty("response")
    public void setResponse(CracSlotsGetCRACDistributedResourcesAndRoomsResponse value) { this.response = value; }
}
