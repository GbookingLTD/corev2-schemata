package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class CracSlotsController {
    private CRACDistributedResourcesFreeByDate cracDistributedResourcesFreeByDate;
    private CRACResourcesFreeByDate cracResourcesFreeByDate;
    private CRACResourcesFreeByDateV2 cracResourcesFreeByDateV2;
    private GetCRACDistributedResourcesAndRooms getCRACDistributedResourcesAndRooms;
    private GetCRACInsuranceResourcesAndRooms getCRACInsuranceResourcesAndRooms;
    private GetCRACResourcesAndRooms getCRACResourcesAndRooms;

    @JsonProperty("CRACDistributedResourcesFreeByDate")
    public CRACDistributedResourcesFreeByDate getCracDistributedResourcesFreeByDate() { return cracDistributedResourcesFreeByDate; }
    @JsonProperty("CRACDistributedResourcesFreeByDate")
    public void setCracDistributedResourcesFreeByDate(CRACDistributedResourcesFreeByDate value) { this.cracDistributedResourcesFreeByDate = value; }

    @JsonProperty("CRACResourcesFreeByDate")
    public CRACResourcesFreeByDate getCracResourcesFreeByDate() { return cracResourcesFreeByDate; }
    @JsonProperty("CRACResourcesFreeByDate")
    public void setCracResourcesFreeByDate(CRACResourcesFreeByDate value) { this.cracResourcesFreeByDate = value; }

    @JsonProperty("CRACResourcesFreeByDateV2")
    public CRACResourcesFreeByDateV2 getCracResourcesFreeByDateV2() { return cracResourcesFreeByDateV2; }
    @JsonProperty("CRACResourcesFreeByDateV2")
    public void setCracResourcesFreeByDateV2(CRACResourcesFreeByDateV2 value) { this.cracResourcesFreeByDateV2 = value; }

    @JsonProperty("GetCRACDistributedResourcesAndRooms")
    public GetCRACDistributedResourcesAndRooms getGetCRACDistributedResourcesAndRooms() { return getCRACDistributedResourcesAndRooms; }
    @JsonProperty("GetCRACDistributedResourcesAndRooms")
    public void setGetCRACDistributedResourcesAndRooms(GetCRACDistributedResourcesAndRooms value) { this.getCRACDistributedResourcesAndRooms = value; }

    @JsonProperty("GetCRACInsuranceResourcesAndRooms")
    public GetCRACInsuranceResourcesAndRooms getGetCRACInsuranceResourcesAndRooms() { return getCRACInsuranceResourcesAndRooms; }
    @JsonProperty("GetCRACInsuranceResourcesAndRooms")
    public void setGetCRACInsuranceResourcesAndRooms(GetCRACInsuranceResourcesAndRooms value) { this.getCRACInsuranceResourcesAndRooms = value; }

    @JsonProperty("GetCRACResourcesAndRooms")
    public GetCRACResourcesAndRooms getGetCRACResourcesAndRooms() { return getCRACResourcesAndRooms; }
    @JsonProperty("GetCRACResourcesAndRooms")
    public void setGetCRACResourcesAndRooms(GetCRACResourcesAndRooms value) { this.getCRACResourcesAndRooms = value; }
}
