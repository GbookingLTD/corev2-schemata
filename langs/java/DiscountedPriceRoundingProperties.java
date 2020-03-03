package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class DiscountedPriceRoundingProperties {
    private BackofficeType rule;
    private TrapaniSnowLeopard value;

    @JsonProperty("rule")
    public BackofficeType getRule() { return rule; }
    @JsonProperty("rule")
    public void setRule(BackofficeType value) { this.rule = value; }

    @JsonProperty("value")
    public TrapaniSnowLeopard getValue() { return value; }
    @JsonProperty("value")
    public void setValue(TrapaniSnowLeopard value) { this.value = value; }
}
