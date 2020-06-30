package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class PurpleAdditionalTaxonomyDiscount {
    private Double discount;
    private DiscountProvider discountProvider;
    private String discountType;
    private String taxonomyID;

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

    @JsonProperty("taxonomyID")
    public String getTaxonomyID() { return taxonomyID; }
    @JsonProperty("taxonomyID")
    public void setTaxonomyID(String value) { this.taxonomyID = value; }
}
