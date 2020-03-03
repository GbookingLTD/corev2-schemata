package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class Birthday {
    private List<TypeElement> type;

    @JsonProperty("type")
    public List<TypeElement> getType() { return type; }
    @JsonProperty("type")
    public void setType(List<TypeElement> value) { this.type = value; }
}
