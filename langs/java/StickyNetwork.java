package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class StickyNetwork {
    private FluffyTimeFrameDate id;

    /**
     * идентификатор нетворка
     */
    @JsonProperty("id")
    public FluffyTimeFrameDate getID() { return id; }
    @JsonProperty("id")
    public void setID(FluffyTimeFrameDate value) { this.id = value; }
}
