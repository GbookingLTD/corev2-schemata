package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class ShowcaseElement {
    private String baseBusinessID;

    @JsonProperty("baseBusinessID")
    public String getBaseBusinessID() { return baseBusinessID; }
    @JsonProperty("baseBusinessID")
    public void setBaseBusinessID(String value) { this.baseBusinessID = value; }
}
