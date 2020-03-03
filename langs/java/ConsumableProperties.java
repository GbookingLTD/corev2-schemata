package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class ConsumableProperties {
    private BeijingPigeon extraID;
    private BeijingPigeon name;
    private BeijingPigeon quantity;

    @JsonProperty("extraID")
    public BeijingPigeon getExtraID() { return extraID; }
    @JsonProperty("extraID")
    public void setExtraID(BeijingPigeon value) { this.extraID = value; }

    @JsonProperty("name")
    public BeijingPigeon getName() { return name; }
    @JsonProperty("name")
    public void setName(BeijingPigeon value) { this.name = value; }

    @JsonProperty("quantity")
    public BeijingPigeon getQuantity() { return quantity; }
    @JsonProperty("quantity")
    public void setQuantity(BeijingPigeon value) { this.quantity = value; }
}
