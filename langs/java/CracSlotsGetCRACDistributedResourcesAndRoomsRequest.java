package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class CracSlotsGetCRACDistributedResourcesAndRoomsRequest {
    private CracSlotsGetCRACDistributedResourcesAndRoomsRequestParams params;

    /**
     * параметры запроса
     */
    @JsonProperty("params")
    public CracSlotsGetCRACDistributedResourcesAndRoomsRequestParams getParams() { return params; }
    @JsonProperty("params")
    public void setParams(CracSlotsGetCRACDistributedResourcesAndRoomsRequestParams value) { this.params = value; }
}
