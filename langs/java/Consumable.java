package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class Consumable {
    private String extraID;
    private String name;
    private double quantity;

    @JsonProperty("extraID")
    public String getExtraID() { return extraID; }
    @JsonProperty("extraID")
    public void setExtraID(String value) { this.extraID = value; }

    @JsonProperty("name")
    public String getName() { return name; }
    @JsonProperty("name")
    public void setName(String value) { this.name = value; }

    @JsonProperty("quantity")
    public double getQuantity() { return quantity; }
    @JsonProperty("quantity")
    public void setQuantity(double value) { this.quantity = value; }
}
