package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class ExtraFilters {
    private List<Sort> sort;

    @JsonProperty("sort")
    public List<Sort> getSort() { return sort; }
    @JsonProperty("sort")
    public void setSort(List<Sort> value) { this.sort = value; }
}
