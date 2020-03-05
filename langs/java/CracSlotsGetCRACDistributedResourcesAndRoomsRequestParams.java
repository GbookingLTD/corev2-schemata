package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

/**
 * параметры запроса
 */
public class CracSlotsGetCRACDistributedResourcesAndRoomsRequestParams {
    private HilariousBusiness business;
    private PurpleFilters filters;

    @JsonProperty("business")
    public HilariousBusiness getBusiness() { return business; }
    @JsonProperty("business")
    public void setBusiness(HilariousBusiness value) { this.business = value; }

    @JsonProperty("filters")
    public PurpleFilters getFilters() { return filters; }
    @JsonProperty("filters")
    public void setFilters(PurpleFilters value) { this.filters = value; }
}
