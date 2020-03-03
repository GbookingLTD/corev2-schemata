package ru.gbooking.apiv2;

import java.util.*;

public class BusinessTaxonomyPrice {
    private String amount;
    private CurrencyList currency;
    private double resourceLevel;
    private String stockAmount;
    private AdditionalPriceType type;

    /**
     * Значение цены
     */
    public String getAmount() { return amount; }
    public void setAmount(String value) { this.amount = value; }

    /**
     * Аббревиатура валюты
     */
    public CurrencyList getCurrency() { return currency; }
    public void setCurrency(CurrencyList value) { this.currency = value; }

    /**
     * "Уровень" цены. Работнику можно выставить его "уровень" (поле level в resources)
     */
    public double getResourceLevel() { return resourceLevel; }
    public void setResourceLevel(double value) { this.resourceLevel = value; }

    /**
     * Значение цены, с учётом промо акций
     */
    public String getStockAmount() { return stockAmount; }
    public void setStockAmount(String value) { this.stockAmount = value; }

    /**
     * Тип цены
     */
    public AdditionalPriceType getType() { return type; }
    public void setType(AdditionalPriceType value) { this.type = value; }
}
