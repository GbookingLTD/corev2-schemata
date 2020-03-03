package ru.gbooking.apiv2;

import java.util.*;

public class Consumable {
    private String extraID;
    private String name;
    private double quantity;

    public String getExtraID() { return extraID; }
    public void setExtraID(String value) { this.extraID = value; }

    public String getName() { return name; }
    public void setName(String value) { this.name = value; }

    public double getQuantity() { return quantity; }
    public void setQuantity(double value) { this.quantity = value; }
}
