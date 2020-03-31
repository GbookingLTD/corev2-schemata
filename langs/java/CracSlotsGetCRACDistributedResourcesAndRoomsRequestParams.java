package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

/**
 * параметры запроса
 */
public class CracSlotsGetCRACDistributedResourcesAndRoomsRequestParams {
    private MischievousBusiness business;
    private PurpleFilters filters;

    @JsonProperty("business")
    public MischievousBusiness getBusiness() { return business; }
    @JsonProperty("business")
    public void setBusiness(MischievousBusiness value) { this.business = value; }

    @JsonProperty("filters")
    public PurpleFilters getFilters() { return filters; }
    @JsonProperty("filters")
    public void setFilters(PurpleFilters value) { this.filters = value; }
}
