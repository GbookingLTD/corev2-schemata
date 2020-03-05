package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class CracSlotsController {
    private GetCRACDistributedResourcesAndRooms getCRACDistributedResourcesAndRooms;
    private GetCRACInsuranceResourcesAndRooms getCRACInsuranceResourcesAndRooms;
    private GetCRACResourcesAndRooms getCRACResourcesAndRooms;

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
