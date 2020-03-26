package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class FluffyNetwork {
    private PurpleTimeFrameDate id;

    /**
     * идентификатор нетворка
     */
    @JsonProperty("id")
    public PurpleTimeFrameDate getID() { return id; }
    @JsonProperty("id")
    public void setID(PurpleTimeFrameDate value) { this.id = value; }
}
