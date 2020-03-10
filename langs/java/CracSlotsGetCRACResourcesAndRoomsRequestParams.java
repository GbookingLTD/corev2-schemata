package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

/**
 * параметры запроса
 */
public class CracSlotsGetCRACResourcesAndRoomsRequestParams {
    private CunningBusiness business;
    private TentacledFilters filters;

    @JsonProperty("business")
    public CunningBusiness getBusiness() { return business; }
    @JsonProperty("business")
    public void setBusiness(CunningBusiness value) { this.business = value; }

    @JsonProperty("filters")
    public TentacledFilters getFilters() { return filters; }
    @JsonProperty("filters")
    public void setFilters(TentacledFilters value) { this.filters = value; }
}
