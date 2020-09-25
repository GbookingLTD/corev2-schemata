package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class FluffyExtraFilters {
    private List<FluffySort> sort;

    @JsonProperty("sort")
    public List<FluffySort> getSort() { return sort; }
    @JsonProperty("sort")
    public void setSort(List<FluffySort> value) { this.sort = value; }
}
