package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class ClientIntegrationData {
    private String transactionID;

    @JsonProperty("transactionID")
    public String getTransactionID() { return transactionID; }
    @JsonProperty("transactionID")
    public void setTransactionID(String value) { this.transactionID = value; }
}
