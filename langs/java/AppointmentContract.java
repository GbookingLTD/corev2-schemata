package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class AppointmentContract {
    private String clientContractID;
    private String contractID;
    private String id;

    @JsonProperty("clientContractID")
    public String getClientContractID() { return clientContractID; }
    @JsonProperty("clientContractID")
    public void setClientContractID(String value) { this.clientContractID = value; }

    @JsonProperty("contractID")
    public String getContractID() { return contractID; }
    @JsonProperty("contractID")
    public void setContractID(String value) { this.contractID = value; }

    @JsonProperty("id")
    public String getID() { return id; }
    @JsonProperty("id")
    public void setID(String value) { this.id = value; }
}
