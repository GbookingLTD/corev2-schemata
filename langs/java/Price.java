package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class Price {
    private List<AdditionalTaxonomyDiscount> additionalTaxonomyDiscount;
    private Double amount;
    private CurrencyList currency;
    private Double discount;
    private DiscountProvider discountProvider;
    private String discountType;
    private Double originalAmount;

    @JsonProperty("additionalTaxonomyDiscount")
    public List<AdditionalTaxonomyDiscount> getAdditionalTaxonomyDiscount() { return additionalTaxonomyDiscount; }
    @JsonProperty("additionalTaxonomyDiscount")
    public void setAdditionalTaxonomyDiscount(List<AdditionalTaxonomyDiscount> value) { this.additionalTaxonomyDiscount = value; }

    @JsonProperty("amount")
    public Double getAmount() { return amount; }
    @JsonProperty("amount")
    public void setAmount(Double value) { this.amount = value; }

    @JsonProperty("currency")
    public CurrencyList getCurrency() { return currency; }
    @JsonProperty("currency")
    public void setCurrency(CurrencyList value) { this.currency = value; }

    @JsonProperty("discount")
    public Double getDiscount() { return discount; }
    @JsonProperty("discount")
    public void setDiscount(Double value) { this.discount = value; }

    @JsonProperty("discountProvider")
    public DiscountProvider getDiscountProvider() { return discountProvider; }
    @JsonProperty("discountProvider")
    public void setDiscountProvider(DiscountProvider value) { this.discountProvider = value; }

    @JsonProperty("discountType")
    public String getDiscountType() { return discountType; }
    @JsonProperty("discountType")
    public void setDiscountType(String value) { this.discountType = value; }

    @JsonProperty("originalAmount")
    public Double getOriginalAmount() { return originalAmount; }
    @JsonProperty("originalAmount")
    public void setOriginalAmount(Double value) { this.originalAmount = value; }
}
