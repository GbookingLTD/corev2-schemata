package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class BackofficeConfigurationClass {
    private TypeElement type;
    private String ref;

    @JsonProperty("type")
    public TypeElement getType() { return type; }
    @JsonProperty("type")
    public void setType(TypeElement value) { this.type = value; }

    @JsonProperty("$ref")
    public String getRef() { return ref; }
    @JsonProperty("$ref")
    public void setRef(String value) { this.ref = value; }
}
