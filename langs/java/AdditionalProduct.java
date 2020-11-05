package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class AdditionalProduct {
    private String id;
    private double price;

    @JsonProperty("id")
    public String getID() { return id; }
    @JsonProperty("id")
    public void setID(String value) { this.id = value; }

    @JsonProperty("price")
    public double getPrice() { return price; }
    @JsonProperty("price")
    public void setPrice(double value) { this.price = value; }
}
