package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class IsraelCityIsraelCity {
    private String cityID;
    private String name;

    @JsonProperty("cityId")
    public String getCityID() { return cityID; }
    @JsonProperty("cityId")
    public void setCityID(String value) { this.cityID = value; }

    @JsonProperty("name")
    public String getName() { return name; }
    @JsonProperty("name")
    public void setName(String value) { this.name = value; }
}
