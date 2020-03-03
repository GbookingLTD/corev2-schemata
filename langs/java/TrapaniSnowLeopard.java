package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class TrapaniSnowLeopard {
    private TypeElement type;
    private long trapaniSnowLeopardDefault;

    @JsonProperty("type")
    public TypeElement getType() { return type; }
    @JsonProperty("type")
    public void setType(TypeElement value) { this.type = value; }

    @JsonProperty("default")
    public long getTrapaniSnowLeopardDefault() { return trapaniSnowLeopardDefault; }
    @JsonProperty("default")
    public void setTrapaniSnowLeopardDefault(long value) { this.trapaniSnowLeopardDefault = value; }
}
