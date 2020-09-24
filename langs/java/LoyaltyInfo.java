package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class LoyaltyInfo {
    private Double annualTurnover;
    private Double bonusPoints;
    private String cardNumber;
    private List<Present> presents;
    private List<Purchase> purchases;
    private String status;

    @JsonProperty("annualTurnover")
    public Double getAnnualTurnover() { return annualTurnover; }
    @JsonProperty("annualTurnover")
    public void setAnnualTurnover(Double value) { this.annualTurnover = value; }

    @JsonProperty("bonusPoints")
    public Double getBonusPoints() { return bonusPoints; }
    @JsonProperty("bonusPoints")
    public void setBonusPoints(Double value) { this.bonusPoints = value; }

    @JsonProperty("cardNumber")
    public String getCardNumber() { return cardNumber; }
    @JsonProperty("cardNumber")
    public void setCardNumber(String value) { this.cardNumber = value; }

    @JsonProperty("presents")
    public List<Present> getPresents() { return presents; }
    @JsonProperty("presents")
    public void setPresents(List<Present> value) { this.presents = value; }

    @JsonProperty("purchases")
    public List<Purchase> getPurchases() { return purchases; }
    @JsonProperty("purchases")
    public void setPurchases(List<Purchase> value) { this.purchases = value; }

    @JsonProperty("status")
    public String getStatus() { return status; }
    @JsonProperty("status")
    public void setStatus(String value) { this.status = value; }
}
