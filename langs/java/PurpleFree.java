package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;
import java.time.OffsetDateTime;

public class PurpleFree {
    private OffsetDateTime date;
    private double maxFreeMinutes;
    private String resource;
    private String taxonomy;

    @JsonProperty("date")
    public OffsetDateTime getDate() { return date; }
    @JsonProperty("date")
    public void setDate(OffsetDateTime value) { this.date = value; }

    @JsonProperty("maxFreeMinutes")
    public double getMaxFreeMinutes() { return maxFreeMinutes; }
    @JsonProperty("maxFreeMinutes")
    public void setMaxFreeMinutes(double value) { this.maxFreeMinutes = value; }

    @JsonProperty("resource")
    public String getResource() { return resource; }
    @JsonProperty("resource")
    public void setResource(String value) { this.resource = value; }

    @JsonProperty("taxonomy")
    public String getTaxonomy() { return taxonomy; }
    @JsonProperty("taxonomy")
    public void setTaxonomy(String value) { this.taxonomy = value; }
}
