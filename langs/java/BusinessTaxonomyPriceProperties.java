package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class BusinessTaxonomyPriceProperties {
    private Currency currency;
    private Amount amount;
    private StockAmount stockAmount;
    private TypeClass type;

    @JsonProperty("currency")
    public Currency getCurrency() { return currency; }
    @JsonProperty("currency")
    public void setCurrency(Currency value) { this.currency = value; }

    @JsonProperty("amount")
    public Amount getAmount() { return amount; }
    @JsonProperty("amount")
    public void setAmount(Amount value) { this.amount = value; }

    @JsonProperty("stockAmount")
    public StockAmount getStockAmount() { return stockAmount; }
    @JsonProperty("stockAmount")
    public void setStockAmount(StockAmount value) { this.stockAmount = value; }

    @JsonProperty("type")
    public TypeClass getType() { return type; }
    @JsonProperty("type")
    public void setType(TypeClass value) { this.type = value; }
}
