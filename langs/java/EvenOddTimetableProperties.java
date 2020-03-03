package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class EvenOddTimetableProperties {
    private TypeClass startPeriod;
    private TaxonomyChildren even;
    private TaxonomyChildren odd;

    @JsonProperty("startPeriod")
    public TypeClass getStartPeriod() { return startPeriod; }
    @JsonProperty("startPeriod")
    public void setStartPeriod(TypeClass value) { this.startPeriod = value; }

    @JsonProperty("even")
    public TaxonomyChildren getEven() { return even; }
    @JsonProperty("even")
    public void setEven(TaxonomyChildren value) { this.even = value; }

    @JsonProperty("odd")
    public TaxonomyChildren getOdd() { return odd; }
    @JsonProperty("odd")
    public void setOdd(TaxonomyChildren value) { this.odd = value; }
}
