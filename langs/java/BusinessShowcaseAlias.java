package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class BusinessShowcaseAlias {
    private String internalID;

    @JsonProperty("internalID")
    public String getInternalID() { return internalID; }
    @JsonProperty("internalID")
    public void setInternalID(String value) { this.internalID = value; }
}
