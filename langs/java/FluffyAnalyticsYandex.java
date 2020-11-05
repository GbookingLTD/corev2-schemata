package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class FluffyAnalyticsYandex {
    private Boolean active;
    private String key;

    @JsonProperty("active")
    public Boolean getActive() { return active; }
    @JsonProperty("active")
    public void setActive(Boolean value) { this.active = value; }

    @JsonProperty("key")
    public String getKey() { return key; }
    @JsonProperty("key")
    public void setKey(String value) { this.key = value; }
}
