package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class Amount {
    private String description;
    private TypeElement type;
    private String amountDefault;

    @JsonProperty("description")
    public String getDescription() { return description; }
    @JsonProperty("description")
    public void setDescription(String value) { this.description = value; }

    @JsonProperty("type")
    public TypeElement getType() { return type; }
    @JsonProperty("type")
    public void setType(TypeElement value) { this.type = value; }

    @JsonProperty("default")
    public String getAmountDefault() { return amountDefault; }
    @JsonProperty("default")
    public void setAmountDefault(String value) { this.amountDefault = value; }
}
