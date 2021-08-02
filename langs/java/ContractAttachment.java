package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;
import java.util.List;

public class ContractAttachment {
    private Boolean active;
    private String attachmentExtraID;
    private String attachmentID;
    private String attachmentName;
    private String attachmentNumber;
    private String businessID;
    private String contractExtraID;
    private String contractID;
    private String contractName;
    private String contractNumber;
    private String contractOwnerName;
    private String dateBegin;
    private String dateEnd;
    private String networkID;
    private String provider;
    private List<TaxonomyElement> taxonomies;

    @JsonProperty("active")
    public Boolean getActive() { return active; }
    @JsonProperty("active")
    public void setActive(Boolean value) { this.active = value; }

    @JsonProperty("attachmentExtraID")
    public String getAttachmentExtraID() { return attachmentExtraID; }
    @JsonProperty("attachmentExtraID")
    public void setAttachmentExtraID(String value) { this.attachmentExtraID = value; }

    @JsonProperty("attachmentID")
    public String getAttachmentID() { return attachmentID; }
    @JsonProperty("attachmentID")
    public void setAttachmentID(String value) { this.attachmentID = value; }

    @JsonProperty("attachmentName")
    public String getAttachmentName() { return attachmentName; }
    @JsonProperty("attachmentName")
    public void setAttachmentName(String value) { this.attachmentName = value; }

    @JsonProperty("attachmentNumber")
    public String getAttachmentNumber() { return attachmentNumber; }
    @JsonProperty("attachmentNumber")
    public void setAttachmentNumber(String value) { this.attachmentNumber = value; }

    @JsonProperty("businessID")
    public String getBusinessID() { return businessID; }
    @JsonProperty("businessID")
    public void setBusinessID(String value) { this.businessID = value; }

    @JsonProperty("contractExtraID")
    public String getContractExtraID() { return contractExtraID; }
    @JsonProperty("contractExtraID")
    public void setContractExtraID(String value) { this.contractExtraID = value; }

    @JsonProperty("contractID")
    public String getContractID() { return contractID; }
    @JsonProperty("contractID")
    public void setContractID(String value) { this.contractID = value; }

    @JsonProperty("contractName")
    public String getContractName() { return contractName; }
    @JsonProperty("contractName")
    public void setContractName(String value) { this.contractName = value; }

    @JsonProperty("contractNumber")
    public String getContractNumber() { return contractNumber; }
    @JsonProperty("contractNumber")
    public void setContractNumber(String value) { this.contractNumber = value; }

    @JsonProperty("contractOwnerName")
    public String getContractOwnerName() { return contractOwnerName; }
    @JsonProperty("contractOwnerName")
    public void setContractOwnerName(String value) { this.contractOwnerName = value; }

    @JsonProperty("dateBegin")
    public String getDateBegin() { return dateBegin; }
    @JsonProperty("dateBegin")
    public void setDateBegin(String value) { this.dateBegin = value; }

    @JsonProperty("dateEnd")
    public String getDateEnd() { return dateEnd; }
    @JsonProperty("dateEnd")
    public void setDateEnd(String value) { this.dateEnd = value; }

    @JsonProperty("networkID")
    public String getNetworkID() { return networkID; }
    @JsonProperty("networkID")
    public void setNetworkID(String value) { this.networkID = value; }

    @JsonProperty("provider")
    public String getProvider() { return provider; }
    @JsonProperty("provider")
    public void setProvider(String value) { this.provider = value; }

    @JsonProperty("taxonomies")
    public List<TaxonomyElement> getTaxonomies() { return taxonomies; }
    @JsonProperty("taxonomies")
    public void setTaxonomies(List<TaxonomyElement> value) { this.taxonomies = value; }
}
