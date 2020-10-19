package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class ResourceTaxonomyLevel {
    private String id;
    private double level;

    /**
     * идентификатор услуги, для которой установлено уровень скорости
     */
    @JsonProperty("id")
    public String getID() { return id; }
    @JsonProperty("id")
    public void setID(String value) { this.id = value; }

    /**
     * уровень скорости
     */
    @JsonProperty("level")
    public double getLevel() { return level; }
    @JsonProperty("level")
    public void setLevel(double value) { this.level = value; }
}
