package ru.gbooking.apiv2;

import java.util.*;

public class ResourceTaxonomyLevel {
    private String id;
    private double level;

    /**
     * идентификатор услуги, для которой установлено уровень скорости
     */
    public String getID() { return id; }
    public void setID(String value) { this.id = value; }

    /**
     * уровень скорости
     */
    public double getLevel() { return level; }
    public void setLevel(double value) { this.level = value; }
}
