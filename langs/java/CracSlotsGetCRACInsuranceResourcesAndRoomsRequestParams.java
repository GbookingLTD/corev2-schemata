package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

/**
 * параметры запроса
 */
public class CracSlotsGetCRACInsuranceResourcesAndRoomsRequestParams {
    private BraggadociousBusiness business;
    private FluffyFilters filters;

    @JsonProperty("business")
    public BraggadociousBusiness getBusiness() { return business; }
    @JsonProperty("business")
    public void setBusiness(BraggadociousBusiness value) { this.business = value; }

    @JsonProperty("filters")
    public FluffyFilters getFilters() { return filters; }
    @JsonProperty("filters")
    public void setFilters(FluffyFilters value) { this.filters = value; }
}
