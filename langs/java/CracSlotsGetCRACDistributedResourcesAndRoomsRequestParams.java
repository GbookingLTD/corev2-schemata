package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

/**
 * параметры запроса
 */
public class CracSlotsGetCRACDistributedResourcesAndRoomsRequestParams {
    private BraggadociousBusiness business;
    private PurpleFilters filters;

    @JsonProperty("business")
    public BraggadociousBusiness getBusiness() { return business; }
    @JsonProperty("business")
    public void setBusiness(BraggadociousBusiness value) { this.business = value; }

    @JsonProperty("filters")
    public PurpleFilters getFilters() { return filters; }
    @JsonProperty("filters")
    public void setFilters(PurpleFilters value) { this.filters = value; }
}
