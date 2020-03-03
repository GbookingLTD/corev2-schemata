package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class FluffyProperties {
    private CreatedOn dateLimitFrom;
    private CreatedOn dateLimitTo;

    @JsonProperty("dateLimitFrom")
    public CreatedOn getDateLimitFrom() { return dateLimitFrom; }
    @JsonProperty("dateLimitFrom")
    public void setDateLimitFrom(CreatedOn value) { this.dateLimitFrom = value; }

    @JsonProperty("dateLimitTo")
    public CreatedOn getDateLimitTo() { return dateLimitTo; }
    @JsonProperty("dateLimitTo")
    public void setDateLimitTo(CreatedOn value) { this.dateLimitTo = value; }
}
