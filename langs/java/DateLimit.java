package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class DateLimit {
    private String dateLimitFrom;
    private String dateLimitTo;

    @JsonProperty("dateLimitFrom")
    public String getDateLimitFrom() { return dateLimitFrom; }
    @JsonProperty("dateLimitFrom")
    public void setDateLimitFrom(String value) { this.dateLimitFrom = value; }

    @JsonProperty("dateLimitTo")
    public String getDateLimitTo() { return dateLimitTo; }
    @JsonProperty("dateLimitTo")
    public void setDateLimitTo(String value) { this.dateLimitTo = value; }
}
