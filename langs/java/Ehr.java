package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class Ehr {
    private Boolean active;

    @JsonProperty("active")
    public Boolean getActive() { return active; }
    @JsonProperty("active")
    public void setActive(Boolean value) { this.active = value; }
}
