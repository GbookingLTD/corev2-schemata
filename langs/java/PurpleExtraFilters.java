package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class PurpleExtraFilters {
    private List<PurpleSort> sort;

    @JsonProperty("sort")
    public List<PurpleSort> getSort() { return sort; }
    @JsonProperty("sort")
    public void setSort(List<PurpleSort> value) { this.sort = value; }
}
