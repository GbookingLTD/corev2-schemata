package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class Showcase {
    private String baseBusinessID;

    @JsonProperty("baseBusinessID")
    public String getBaseBusinessID() { return baseBusinessID; }
    @JsonProperty("baseBusinessID")
    public void setBaseBusinessID(String value) { this.baseBusinessID = value; }
}
