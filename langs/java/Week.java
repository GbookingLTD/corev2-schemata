package ru.gbooking.apiv2;

import java.util.*;

public class Week {
    private List<TimeFrame> fri;
    private List<TimeFrame> mon;
    private List<TimeFrame> sat;
    private List<TimeFrame> sun;
    private List<TimeFrame> thu;
    private List<TimeFrame> tue;
    private List<TimeFrame> wed;

    public List<TimeFrame> getFri() { return fri; }
    public void setFri(List<TimeFrame> value) { this.fri = value; }

    public List<TimeFrame> getMon() { return mon; }
    public void setMon(List<TimeFrame> value) { this.mon = value; }

    public List<TimeFrame> getSat() { return sat; }
    public void setSat(List<TimeFrame> value) { this.sat = value; }

    public List<TimeFrame> getSun() { return sun; }
    public void setSun(List<TimeFrame> value) { this.sun = value; }

    public List<TimeFrame> getThu() { return thu; }
    public void setThu(List<TimeFrame> value) { this.thu = value; }

    public List<TimeFrame> getTue() { return tue; }
    public void setTue(List<TimeFrame> value) { this.tue = value; }

    public List<TimeFrame> getWed() { return wed; }
    public void setWed(List<TimeFrame> value) { this.wed = value; }
}
