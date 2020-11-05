package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class NetworkElement {
    private Address address;
    private String businessName;
    private String description;
    private String internalID;

    @JsonProperty("address")
    public Address getAddress() { return address; }
    @JsonProperty("address")
    public void setAddress(Address value) { this.address = value; }

    @JsonProperty("businessName")
    public String getBusinessName() { return businessName; }
    @JsonProperty("businessName")
    public void setBusinessName(String value) { this.businessName = value; }

    @JsonProperty("description")
    public String getDescription() { return description; }
    @JsonProperty("description")
    public void setDescription(String value) { this.description = value; }

    @JsonProperty("internalID")
    public String getInternalID() { return internalID; }
    @JsonProperty("internalID")
    public void setInternalID(String value) { this.internalID = value; }
}
