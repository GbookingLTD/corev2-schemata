package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class TaxonomyClass {
    private String comment;
    private Double rate;

    @JsonProperty("comment")
    public String getComment() { return comment; }
    @JsonProperty("comment")
    public void setComment(String value) { this.comment = value; }

    @JsonProperty("rate")
    public Double getRate() { return rate; }
    @JsonProperty("rate")
    public void setRate(Double value) { this.rate = value; }
}
