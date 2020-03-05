package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class CracSlotsGetCRACInsuranceResourcesAndRoomsRequest {
    private CracSlotsGetCRACInsuranceResourcesAndRoomsRequestParams params;

    /**
     * параметры запроса
     */
    @JsonProperty("params")
    public CracSlotsGetCRACInsuranceResourcesAndRoomsRequestParams getParams() { return params; }
    @JsonProperty("params")
    public void setParams(CracSlotsGetCRACInsuranceResourcesAndRoomsRequestParams value) { this.params = value; }
}
