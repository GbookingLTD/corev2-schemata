package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;
import java.util.List;

public class Week {
    private List<TimeFrame> fri;
    private List<TimeFrame> mon;
    private List<TimeFrame> sat;
    private List<TimeFrame> sun;
    private List<TimeFrame> thu;
    private List<TimeFrame> tue;
    private List<TimeFrame> wed;

    @JsonProperty("fri")
    public List<TimeFrame> getFri() { return fri; }
    @JsonProperty("fri")
    public void setFri(List<TimeFrame> value) { this.fri = value; }

    @JsonProperty("mon")
    public List<TimeFrame> getMon() { return mon; }
    @JsonProperty("mon")
    public void setMon(List<TimeFrame> value) { this.mon = value; }

    @JsonProperty("sat")
    public List<TimeFrame> getSat() { return sat; }
    @JsonProperty("sat")
    public void setSat(List<TimeFrame> value) { this.sat = value; }

    @JsonProperty("sun")
    public List<TimeFrame> getSun() { return sun; }
    @JsonProperty("sun")
    public void setSun(List<TimeFrame> value) { this.sun = value; }

    @JsonProperty("thu")
    public List<TimeFrame> getThu() { return thu; }
    @JsonProperty("thu")
    public void setThu(List<TimeFrame> value) { this.thu = value; }

    @JsonProperty("tue")
    public List<TimeFrame> getTue() { return tue; }
    @JsonProperty("tue")
    public void setTue(List<TimeFrame> value) { this.tue = value; }

    @JsonProperty("wed")
    public List<TimeFrame> getWed() { return wed; }
    @JsonProperty("wed")
    public void setWed(List<TimeFrame> value) { this.wed = value; }
}
