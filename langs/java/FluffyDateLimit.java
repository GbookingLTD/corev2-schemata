package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;
import java.time.OffsetDateTime;

public class FluffyDateLimit {
    private String id;
    private OffsetDateTime dateLimitFrom;
    private OffsetDateTime dateLimitTo;

    @JsonProperty("_id")
    public String getID() { return id; }
    @JsonProperty("_id")
    public void setID(String value) { this.id = value; }

    @JsonProperty("dateLimitFrom")
    public OffsetDateTime getDateLimitFrom() { return dateLimitFrom; }
    @JsonProperty("dateLimitFrom")
    public void setDateLimitFrom(OffsetDateTime value) { this.dateLimitFrom = value; }

    @JsonProperty("dateLimitTo")
    public OffsetDateTime getDateLimitTo() { return dateLimitTo; }
    @JsonProperty("dateLimitTo")
    public void setDateLimitTo(OffsetDateTime value) { this.dateLimitTo = value; }
}
