package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class IntegrationDataClass {
    private String transactionID;

    @JsonProperty("transactionID")
    public String getTransactionID() { return transactionID; }
    @JsonProperty("transactionID")
    public void setTransactionID(String value) { this.transactionID = value; }
}
