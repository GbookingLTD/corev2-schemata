package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class ResourceTelemedData {
    private Boolean active;
    private String id;

    @JsonProperty("active")
    public Boolean getActive() { return active; }
    @JsonProperty("active")
    public void setActive(Boolean value) { this.active = value; }

    @JsonProperty("id")
    public String getID() { return id; }
    @JsonProperty("id")
    public void setID(String value) { this.id = value; }
}
