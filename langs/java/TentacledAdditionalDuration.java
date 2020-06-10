package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class TentacledAdditionalDuration {
    private Double duration;
    private Double level;

    @JsonProperty("duration")
    public Double getDuration() { return duration; }
    @JsonProperty("duration")
    public void setDuration(Double value) { this.duration = value; }

    @JsonProperty("level")
    public Double getLevel() { return level; }
    @JsonProperty("level")
    public void setLevel(Double value) { this.level = value; }
}
