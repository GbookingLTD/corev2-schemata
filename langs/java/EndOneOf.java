package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class EndOneOf {
    private TypeElement type;
    private String format;
    private Object oneOfConst;

    @JsonProperty("type")
    public TypeElement getType() { return type; }
    @JsonProperty("type")
    public void setType(TypeElement value) { this.type = value; }

    @JsonProperty("format")
    public String getFormat() { return format; }
    @JsonProperty("format")
    public void setFormat(String value) { this.format = value; }

    @JsonProperty("const")
    public Object getOneOfConst() { return oneOfConst; }
    @JsonProperty("const")
    public void setOneOfConst(Object value) { this.oneOfConst = value; }
}
