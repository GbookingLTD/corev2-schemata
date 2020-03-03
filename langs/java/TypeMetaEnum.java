package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class TypeMetaEnum {
    private String equal;
    private String beginWith;
    private String average;

    @JsonProperty("equal")
    public String getEqual() { return equal; }
    @JsonProperty("equal")
    public void setEqual(String value) { this.equal = value; }

    @JsonProperty("begin_with")
    public String getBeginWith() { return beginWith; }
    @JsonProperty("begin_with")
    public void setBeginWith(String value) { this.beginWith = value; }

    @JsonProperty("average")
    public String getAverage() { return average; }
    @JsonProperty("average")
    public void setAverage(String value) { this.average = value; }
}
