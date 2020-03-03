package ru.gbooking.apiv2;

import java.util.*;

public class ResourceLocation {
    private Double latitude;
    private Double longitude;
    private String time;

    public Double getLatitude() { return latitude; }
    public void setLatitude(Double value) { this.latitude = value; }

    public Double getLongitude() { return longitude; }
    public void setLongitude(Double value) { this.longitude = value; }

    /**
     * время последнего обновления координат
     */
    public String getTime() { return time; }
    public void setTime(String value) { this.time = value; }
}
