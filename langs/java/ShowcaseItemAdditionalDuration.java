package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class ShowcaseItemAdditionalDuration {
    private String id;
    private Double duration;
    private Double level;

    @JsonProperty("_id")
    public String getID() { return id; }
    @JsonProperty("_id")
    public void setID(String value) { this.id = value; }

    @JsonProperty("duration")
    public Double getDuration() { return duration; }
    @JsonProperty("duration")
    public void setDuration(Double value) { this.duration = value; }

    /**
     * поддержка различной длительности услуг в зависимости от работника
     */
    @JsonProperty("level")
    public Double getLevel() { return level; }
    @JsonProperty("level")
    public void setLevel(Double value) { this.level = value; }
}
