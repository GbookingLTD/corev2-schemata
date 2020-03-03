package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class End {
    private List<EndOneOf> oneOf;

    @JsonProperty("oneOf")
    public List<EndOneOf> getOneOf() { return oneOf; }
    @JsonProperty("oneOf")
    public void setOneOf(List<EndOneOf> value) { this.oneOf = value; }
}
