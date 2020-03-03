package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class Repeats {
    private TypeElement type;
    private List<String> repeatsEnum;
    private String repeatsDefault;
    private List<PurpleMetaEnum> metaEnum;

    @JsonProperty("type")
    public TypeElement getType() { return type; }
    @JsonProperty("type")
    public void setType(TypeElement value) { this.type = value; }

    @JsonProperty("enum")
    public List<String> getRepeatsEnum() { return repeatsEnum; }
    @JsonProperty("enum")
    public void setRepeatsEnum(List<String> value) { this.repeatsEnum = value; }

    @JsonProperty("default")
    public String getRepeatsDefault() { return repeatsDefault; }
    @JsonProperty("default")
    public void setRepeatsDefault(String value) { this.repeatsDefault = value; }

    @JsonProperty("meta:enum")
    public List<PurpleMetaEnum> getMetaEnum() { return metaEnum; }
    @JsonProperty("meta:enum")
    public void setMetaEnum(List<PurpleMetaEnum> value) { this.metaEnum = value; }
}
