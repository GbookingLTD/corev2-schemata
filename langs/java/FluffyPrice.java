package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class FluffyPrice {
    private String amount;
    private CurrencyList currency;
    private String stockAmount;
    private AdditionalPriceType type;

    /**
     * Значение цены
     */
    @JsonProperty("amount")
    public String getAmount() { return amount; }
    @JsonProperty("amount")
    public void setAmount(String value) { this.amount = value; }

    /**
     * Аббревиатура валюты (например, RUB - рубль)
     */
    @JsonProperty("currency")
    public CurrencyList getCurrency() { return currency; }
    @JsonProperty("currency")
    public void setCurrency(CurrencyList value) { this.currency = value; }

    /**
     * Значение цены, с учётом промо акций
     */
    @JsonProperty("stockAmount")
    public String getStockAmount() { return stockAmount; }
    @JsonProperty("stockAmount")
    public void setStockAmount(String value) { this.stockAmount = value; }

    /**
     * Тип цены
     */
    @JsonProperty("type")
    public AdditionalPriceType getType() { return type; }
    @JsonProperty("type")
    public void setType(AdditionalPriceType value) { this.type = value; }
}
