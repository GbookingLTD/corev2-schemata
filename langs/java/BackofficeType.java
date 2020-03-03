package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class BackofficeType {
    private TypeElement type;
    private List<String> backofficeTypeEnum;

    @JsonProperty("type")
    public TypeElement getType() { return type; }
    @JsonProperty("type")
    public void setType(TypeElement value) { this.type = value; }

    @JsonProperty("enum")
    public List<String> getBackofficeTypeEnum() { return backofficeTypeEnum; }
    @JsonProperty("enum")
    public void setBackofficeTypeEnum(List<String> value) { this.backofficeTypeEnum = value; }
}
