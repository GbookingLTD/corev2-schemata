package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class FluffyNetwork {
    private OrderWeight id;

    @JsonProperty("id")
    public OrderWeight getID() { return id; }
    @JsonProperty("id")
    public void setID(OrderWeight value) { this.id = value; }
}
