package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class CracSlotSize {
    private TypeElement type;
    private List<Long> cracSlotSizeEnum;
    private long cracSlotSizeDefault;

    @JsonProperty("type")
    public TypeElement getType() { return type; }
    @JsonProperty("type")
    public void setType(TypeElement value) { this.type = value; }

    @JsonProperty("enum")
    public List<Long> getCracSlotSizeEnum() { return cracSlotSizeEnum; }
    @JsonProperty("enum")
    public void setCracSlotSizeEnum(List<Long> value) { this.cracSlotSizeEnum = value; }

    @JsonProperty("default")
    public long getCracSlotSizeDefault() { return cracSlotSizeDefault; }
    @JsonProperty("default")
    public void setCracSlotSizeDefault(long value) { this.cracSlotSizeDefault = value; }
}
