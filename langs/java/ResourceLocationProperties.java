package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class ResourceLocationProperties {
    private BeijingPigeon longitude;
    private BeijingPigeon latitude;
    private HammerfestPonies time;

    @JsonProperty("longitude")
    public BeijingPigeon getLongitude() { return longitude; }
    @JsonProperty("longitude")
    public void setLongitude(BeijingPigeon value) { this.longitude = value; }

    @JsonProperty("latitude")
    public BeijingPigeon getLatitude() { return latitude; }
    @JsonProperty("latitude")
    public void setLatitude(BeijingPigeon value) { this.latitude = value; }

    @JsonProperty("time")
    public HammerfestPonies getTime() { return time; }
    @JsonProperty("time")
    public void setTime(HammerfestPonies value) { this.time = value; }
}
