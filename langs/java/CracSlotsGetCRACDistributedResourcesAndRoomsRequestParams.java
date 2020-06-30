package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

/**
 * параметры запроса
 */
public class CracSlotsGetCRACDistributedResourcesAndRoomsRequestParams {
    private CracSlotsRequestBusinessParams business;
    private CracSlotsGetCRACDistributedResourcesAndRoomsRequestFilters filters;

    @JsonProperty("business")
    public CracSlotsRequestBusinessParams getBusiness() { return business; }
    @JsonProperty("business")
    public void setBusiness(CracSlotsRequestBusinessParams value) { this.business = value; }

    @JsonProperty("filters")
    public CracSlotsGetCRACDistributedResourcesAndRoomsRequestFilters getFilters() { return filters; }
    @JsonProperty("filters")
    public void setFilters(CracSlotsGetCRACDistributedResourcesAndRoomsRequestFilters value) { this.filters = value; }
}
