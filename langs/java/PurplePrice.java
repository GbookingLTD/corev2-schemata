package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class PurplePrice {
    private Double amount;
    private CurrencyList currency;

    @JsonProperty("amount")
    public Double getAmount() { return amount; }
    @JsonProperty("amount")
    public void setAmount(Double value) { this.amount = value; }

    @JsonProperty("currency")
    public CurrencyList getCurrency() { return currency; }
    @JsonProperty("currency")
    public void setCurrency(CurrencyList value) { this.currency = value; }
}
