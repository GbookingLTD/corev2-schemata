package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class StickyProperties {
    private BeijingPigeon id;
    private HammerfestPonies level;
    private TrapaniSnowLeopard duration;

    @JsonProperty("_id")
    public BeijingPigeon getID() { return id; }
    @JsonProperty("_id")
    public void setID(BeijingPigeon value) { this.id = value; }

    @JsonProperty("level")
    public HammerfestPonies getLevel() { return level; }
    @JsonProperty("level")
    public void setLevel(HammerfestPonies value) { this.level = value; }

    @JsonProperty("duration")
    public TrapaniSnowLeopard getDuration() { return duration; }
    @JsonProperty("duration")
    public void setDuration(TrapaniSnowLeopard value) { this.duration = value; }
}
