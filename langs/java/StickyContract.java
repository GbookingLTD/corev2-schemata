package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

/**
 * данные по договору, если указано то список работников и услуг формируется на основе
 * переданного договора
 */
public class StickyContract {
    private String extraID;
    private String id;

    @JsonProperty("extraId")
    public String getExtraID() { return extraID; }
    @JsonProperty("extraId")
    public void setExtraID(String value) { this.extraID = value; }

    @JsonProperty("id")
    public String getID() { return id; }
    @JsonProperty("id")
    public void setID(String value) { this.id = value; }
}
