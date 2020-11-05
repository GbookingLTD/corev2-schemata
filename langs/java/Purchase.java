package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class Purchase {
    private Boolean active;
    private String expirationDate;
    private Boolean free;
    private String goodID;
    private Double price;
    private String transactionID;

    @JsonProperty("active")
    public Boolean getActive() { return active; }
    @JsonProperty("active")
    public void setActive(Boolean value) { this.active = value; }

    @JsonProperty("expirationDate")
    public String getExpirationDate() { return expirationDate; }
    @JsonProperty("expirationDate")
    public void setExpirationDate(String value) { this.expirationDate = value; }

    @JsonProperty("free")
    public Boolean getFree() { return free; }
    @JsonProperty("free")
    public void setFree(Boolean value) { this.free = value; }

    @JsonProperty("goodID")
    public String getGoodID() { return goodID; }
    @JsonProperty("goodID")
    public void setGoodID(String value) { this.goodID = value; }

    @JsonProperty("price")
    public Double getPrice() { return price; }
    @JsonProperty("price")
    public void setPrice(Double value) { this.price = value; }

    @JsonProperty("transactionID")
    public String getTransactionID() { return transactionID; }
    @JsonProperty("transactionID")
    public void setTransactionID(String value) { this.transactionID = value; }
}
