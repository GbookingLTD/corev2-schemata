package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class GetCRACInsuranceResourcesAndRooms {
    private CracSlotsGetCRACInsuranceResourcesAndRoomsRequest request;
    private CracSlotsGetCRACInsuranceResourcesAndRoomsResponse response;

    @JsonProperty("request")
    public CracSlotsGetCRACInsuranceResourcesAndRoomsRequest getRequest() { return request; }
    @JsonProperty("request")
    public void setRequest(CracSlotsGetCRACInsuranceResourcesAndRoomsRequest value) { this.request = value; }

    @JsonProperty("response")
    public CracSlotsGetCRACInsuranceResourcesAndRoomsResponse getResponse() { return response; }
    @JsonProperty("response")
    public void setResponse(CracSlotsGetCRACInsuranceResourcesAndRoomsResponse value) { this.response = value; }
}
