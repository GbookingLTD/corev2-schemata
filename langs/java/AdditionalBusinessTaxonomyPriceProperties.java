package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class AdditionalBusinessTaxonomyPriceProperties {
    private HammerfestPonies resourceLevel;
    private Currency currency;
    private Amount amount;
    private Amount stockAmount;
    private TypeClass type;

    @JsonProperty("resourceLevel")
    public HammerfestPonies getResourceLevel() { return resourceLevel; }
    @JsonProperty("resourceLevel")
    public void setResourceLevel(HammerfestPonies value) { this.resourceLevel = value; }

    @JsonProperty("currency")
    public Currency getCurrency() { return currency; }
    @JsonProperty("currency")
    public void setCurrency(Currency value) { this.currency = value; }

    @JsonProperty("amount")
    public Amount getAmount() { return amount; }
    @JsonProperty("amount")
    public void setAmount(Amount value) { this.amount = value; }

    @JsonProperty("stockAmount")
    public Amount getStockAmount() { return stockAmount; }
    @JsonProperty("stockAmount")
    public void setStockAmount(Amount value) { this.stockAmount = value; }

    @JsonProperty("type")
    public TypeClass getType() { return type; }
    @JsonProperty("type")
    public void setType(TypeClass value) { this.type = value; }
}
