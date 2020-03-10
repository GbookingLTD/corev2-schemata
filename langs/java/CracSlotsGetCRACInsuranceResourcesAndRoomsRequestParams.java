package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

/**
 * параметры запроса
 */
public class CracSlotsGetCRACInsuranceResourcesAndRoomsRequestParams {
    private MagentaBusiness business;
    private FluffyFilters filters;

    @JsonProperty("business")
    public MagentaBusiness getBusiness() { return business; }
    @JsonProperty("business")
    public void setBusiness(MagentaBusiness value) { this.business = value; }

    @JsonProperty("filters")
    public FluffyFilters getFilters() { return filters; }
    @JsonProperty("filters")
    public void setFilters(FluffyFilters value) { this.filters = value; }
}
