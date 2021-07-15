package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class FluffyClientCancellationRestriction {
    private Boolean active;
    private Double disableInHours;

    @JsonProperty("active")
    public Boolean getActive() { return active; }
    @JsonProperty("active")
    public void setActive(Boolean value) { this.active = value; }

    @JsonProperty("disableInHours")
    public Double getDisableInHours() { return disableInHours; }
    @JsonProperty("disableInHours")
    public void setDisableInHours(Double value) { this.disableInHours = value; }
}
