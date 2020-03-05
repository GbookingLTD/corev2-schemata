package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class CracSlotsGetCRACResourcesAndRoomsRequest {
    private CracSlotsGetCRACResourcesAndRoomsRequestParams params;

    /**
     * параметры запроса
     */
    @JsonProperty("params")
    public CracSlotsGetCRACResourcesAndRoomsRequestParams getParams() { return params; }
    @JsonProperty("params")
    public void setParams(CracSlotsGetCRACResourcesAndRoomsRequestParams value) { this.params = value; }
}
