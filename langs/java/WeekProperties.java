package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class WeekProperties {
    private Cabinets sun;
    private Cabinets mon;
    private Cabinets tue;
    private Cabinets wed;
    private Cabinets thu;
    private Cabinets fri;
    private Cabinets sat;

    @JsonProperty("sun")
    public Cabinets getSun() { return sun; }
    @JsonProperty("sun")
    public void setSun(Cabinets value) { this.sun = value; }

    @JsonProperty("mon")
    public Cabinets getMon() { return mon; }
    @JsonProperty("mon")
    public void setMon(Cabinets value) { this.mon = value; }

    @JsonProperty("tue")
    public Cabinets getTue() { return tue; }
    @JsonProperty("tue")
    public void setTue(Cabinets value) { this.tue = value; }

    @JsonProperty("wed")
    public Cabinets getWed() { return wed; }
    @JsonProperty("wed")
    public void setWed(Cabinets value) { this.wed = value; }

    @JsonProperty("thu")
    public Cabinets getThu() { return thu; }
    @JsonProperty("thu")
    public void setThu(Cabinets value) { this.thu = value; }

    @JsonProperty("fri")
    public Cabinets getFri() { return fri; }
    @JsonProperty("fri")
    public void setFri(Cabinets value) { this.fri = value; }

    @JsonProperty("sat")
    public Cabinets getSat() { return sat; }
    @JsonProperty("sat")
    public void setSat(Cabinets value) { this.sat = value; }
}
