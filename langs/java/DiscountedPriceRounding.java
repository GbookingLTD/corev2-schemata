package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class DiscountedPriceRounding {
    private TypeElement type;
    private DiscountedPriceRoundingProperties properties;

    @JsonProperty("type")
    public TypeElement getType() { return type; }
    @JsonProperty("type")
    public void setType(TypeElement value) { this.type = value; }

    @JsonProperty("properties")
    public DiscountedPriceRoundingProperties getProperties() { return properties; }
    @JsonProperty("properties")
    public void setProperties(DiscountedPriceRoundingProperties value) { this.properties = value; }
}
