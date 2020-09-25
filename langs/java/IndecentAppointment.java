package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class IndecentAppointment {
    private String finish;
    private String id;

    @JsonProperty("finish")
    public String getFinish() { return finish; }
    @JsonProperty("finish")
    public void setFinish(String value) { this.finish = value; }

    @JsonProperty("id")
    public String getID() { return id; }
    @JsonProperty("id")
    public void setID(String value) { this.id = value; }
}
