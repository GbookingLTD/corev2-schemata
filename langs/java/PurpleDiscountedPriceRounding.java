package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class PurpleDiscountedPriceRounding {
    private Rule rule;
    private Double value;

    @JsonProperty("rule")
    public Rule getRule() { return rule; }
    @JsonProperty("rule")
    public void setRule(Rule value) { this.rule = value; }

    @JsonProperty("value")
    public Double getValue() { return value; }
    @JsonProperty("value")
    public void setValue(Double value) { this.value = value; }
}
