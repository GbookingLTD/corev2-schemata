package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class AdditionalClientKupatHolim {
    private String kupatHolimID;
    private String name;

    @JsonProperty("kupatHolimId")
    public String getKupatHolimID() { return kupatHolimID; }
    @JsonProperty("kupatHolimId")
    public void setKupatHolimID(String value) { this.kupatHolimID = value; }

    @JsonProperty("name")
    public String getName() { return name; }
    @JsonProperty("name")
    public void setName(String value) { this.name = value; }
}
