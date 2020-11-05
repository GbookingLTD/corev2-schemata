package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

/**
 * параметры запроса
 */
public class CracSlotsGetCRACInsuranceResourcesAndRoomsRequestParams {
    private CracSlotsRequestBusinessParams business;
    private CracSlotsGetCRACInsuranceResourcesAndRoomsRequestFilters filters;

    @JsonProperty("business")
    public CracSlotsRequestBusinessParams getBusiness() { return business; }
    @JsonProperty("business")
    public void setBusiness(CracSlotsRequestBusinessParams value) { this.business = value; }

    @JsonProperty("filters")
    public CracSlotsGetCRACInsuranceResourcesAndRoomsRequestFilters getFilters() { return filters; }
    @JsonProperty("filters")
    public void setFilters(CracSlotsGetCRACInsuranceResourcesAndRoomsRequestFilters value) { this.filters = value; }
}
