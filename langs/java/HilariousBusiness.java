package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class HilariousBusiness {
    private PurpleTimeFrameDate id;

    @JsonProperty("id")
    public PurpleTimeFrameDate getID() { return id; }
    @JsonProperty("id")
    public void setID(PurpleTimeFrameDate value) { this.id = value; }
}
