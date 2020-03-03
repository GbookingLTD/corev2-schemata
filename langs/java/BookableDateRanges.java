package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class BookableDateRanges {
    private TypeElement type;
    private BookableDateRangesProperties properties;

    @JsonProperty("type")
    public TypeElement getType() { return type; }
    @JsonProperty("type")
    public void setType(TypeElement value) { this.type = value; }

    @JsonProperty("properties")
    public BookableDateRangesProperties getProperties() { return properties; }
    @JsonProperty("properties")
    public void setProperties(BookableDateRangesProperties value) { this.properties = value; }
}
