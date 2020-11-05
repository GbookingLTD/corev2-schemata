package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class ResultIntegrationData {
    private Ehr ehr;

    @JsonProperty("ehr")
    public Ehr getEhr() { return ehr; }
    @JsonProperty("ehr")
    public void setEhr(Ehr value) { this.ehr = value; }
}
