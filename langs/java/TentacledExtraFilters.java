package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class TentacledExtraFilters {
    private List<TentacledSort> sort;

    @JsonProperty("sort")
    public List<TentacledSort> getSort() { return sort; }
    @JsonProperty("sort")
    public void setSort(List<TentacledSort> value) { this.sort = value; }
}
