package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class PurplePrice {
    private double amount;
    private CurrencyList currency;

    @JsonProperty("amount")
    public double getAmount() { return amount; }
    @JsonProperty("amount")
    public void setAmount(double value) { this.amount = value; }

    @JsonProperty("currency")
    public CurrencyList getCurrency() { return currency; }
    @JsonProperty("currency")
    public void setCurrency(CurrencyList value) { this.currency = value; }
}
