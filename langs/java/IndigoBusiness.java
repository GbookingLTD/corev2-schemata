package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class IndigoBusiness {
    private RequestTimeFrameDate id;

    /**
     * идентификатор бизнеса
     */
    @JsonProperty("id")
    public RequestTimeFrameDate getID() { return id; }
    @JsonProperty("id")
    public void setID(RequestTimeFrameDate value) { this.id = value; }
}
