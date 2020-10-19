package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;
import java.util.List;

public class TentacledExtraFilters {
    private List<TentacledSort> sort;

    @JsonProperty("sort")
    public List<TentacledSort> getSort() { return sort; }
    @JsonProperty("sort")
    public void setSort(List<TentacledSort> value) { this.sort = value; }
}
