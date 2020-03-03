package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class GeneralInfo {
    private String ref;

    @JsonProperty("$ref")
    public String getRef() { return ref; }
    @JsonProperty("$ref")
    public void setRef(String value) { this.ref = value; }
}
