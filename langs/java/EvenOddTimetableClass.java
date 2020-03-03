package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class EvenOddTimetableClass {
    private String definition;
    private String ref;

    @JsonProperty("definition")
    public String getDefinition() { return definition; }
    @JsonProperty("definition")
    public void setDefinition(String value) { this.definition = value; }

    @JsonProperty("$ref")
    public String getRef() { return ref; }
    @JsonProperty("$ref")
    public void setRef(String value) { this.ref = value; }
}
