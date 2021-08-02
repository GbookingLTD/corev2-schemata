package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

/**
 * данные о договоре
 */
public class IndecentContract {
    private String contractExtraID;
    private String contractID;

    @JsonProperty("contractExtraId")
    public String getContractExtraID() { return contractExtraID; }
    @JsonProperty("contractExtraId")
    public void setContractExtraID(String value) { this.contractExtraID = value; }

    @JsonProperty("contractID")
    public String getContractID() { return contractID; }
    @JsonProperty("contractID")
    public void setContractID(String value) { this.contractID = value; }
}
