package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

/**
 * параметры запроса
 */
public class CracSlotsGetCRACResourcesAndRoomsRequestParams {
    private CracSlotsRequestBusinessParams business;
    private CracSlotsGetCRACResourcesAndRoomsRequestFilters filters;

    @JsonProperty("business")
    public CracSlotsRequestBusinessParams getBusiness() { return business; }
    @JsonProperty("business")
    public void setBusiness(CracSlotsRequestBusinessParams value) { this.business = value; }

    @JsonProperty("filters")
    public CracSlotsGetCRACResourcesAndRoomsRequestFilters getFilters() { return filters; }
    @JsonProperty("filters")
    public void setFilters(CracSlotsGetCRACResourcesAndRoomsRequestFilters value) { this.filters = value; }
}
