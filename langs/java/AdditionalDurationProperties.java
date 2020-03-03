package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class AdditionalDurationProperties {
    private BeijingPigeon level;
    private Birthday duration;

    @JsonProperty("level")
    public BeijingPigeon getLevel() { return level; }
    @JsonProperty("level")
    public void setLevel(BeijingPigeon value) { this.level = value; }

    @JsonProperty("duration")
    public Birthday getDuration() { return duration; }
    @JsonProperty("duration")
    public void setDuration(Birthday value) { this.duration = value; }
}
