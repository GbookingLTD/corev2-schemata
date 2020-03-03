package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class StockAmount {
    private String description;
    private List<TypeElement> type;
    private String stockAmountDefault;

    @JsonProperty("description")
    public String getDescription() { return description; }
    @JsonProperty("description")
    public void setDescription(String value) { this.description = value; }

    @JsonProperty("type")
    public List<TypeElement> getType() { return type; }
    @JsonProperty("type")
    public void setType(List<TypeElement> value) { this.type = value; }

    @JsonProperty("default")
    public String getStockAmountDefault() { return stockAmountDefault; }
    @JsonProperty("default")
    public void setStockAmountDefault(String value) { this.stockAmountDefault = value; }
}
