package ru.gbooking.apiv2;

import java.util.*;

public class ShowcaseItemAdditionalDuration {
    private String id;
    private Double duration;
    private Double level;

    public String getID() { return id; }
    public void setID(String value) { this.id = value; }

    public Double getDuration() { return duration; }
    public void setDuration(Double value) { this.duration = value; }

    /**
     * поддержка различной длительности услуг в зависимости от работника
     */
    public Double getLevel() { return level; }
    public void setLevel(Double value) { this.level = value; }
}
