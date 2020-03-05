package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class GetCRACResourcesAndRooms {
    private CracSlotsGetCRACResourcesAndRoomsRequest request;
    private CracSlotsGetCRACResourcesAndRoomsResponse response;

    @JsonProperty("request")
    public CracSlotsGetCRACResourcesAndRoomsRequest getRequest() { return request; }
    @JsonProperty("request")
    public void setRequest(CracSlotsGetCRACResourcesAndRoomsRequest value) { this.request = value; }

    @JsonProperty("response")
    public CracSlotsGetCRACResourcesAndRoomsResponse getResponse() { return response; }
    @JsonProperty("response")
    public void setResponse(CracSlotsGetCRACResourcesAndRoomsResponse value) { this.response = value; }
}
