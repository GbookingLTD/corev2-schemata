package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class StickyNetwork {
    private OrderWeight id;

    /**
     * идентификатор нетворка
     */
    @JsonProperty("id")
    public OrderWeight getID() { return id; }
    @JsonProperty("id")
    public void setID(OrderWeight value) { this.id = value; }
}
