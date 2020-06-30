package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class ResourceLocation {
    private Double latitude;
    private Double longitude;
    private String time;

    @JsonProperty("latitude")
    public Double getLatitude() { return latitude; }
    @JsonProperty("latitude")
    public void setLatitude(Double value) { this.latitude = value; }

    @JsonProperty("longitude")
    public Double getLongitude() { return longitude; }
    @JsonProperty("longitude")
    public void setLongitude(Double value) { this.longitude = value; }

    /**
     * время последнего обновления координат
     */
    @JsonProperty("time")
    public String getTime() { return time; }
    @JsonProperty("time")
    public void setTime(String value) { this.time = value; }
}
