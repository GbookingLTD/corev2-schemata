package ru.gbooking.apiv2;

import java.util.*;

public class Network {
    private Address address;
    private String businessName;
    private String description;
    private String internalID;

    public Address getAddress() { return address; }
    public void setAddress(Address value) { this.address = value; }

    public String getBusinessName() { return businessName; }
    public void setBusinessName(String value) { this.businessName = value; }

    public String getDescription() { return description; }
    public void setDescription(String value) { this.description = value; }

    public String getInternalID() { return internalID; }
    public void setInternalID(String value) { this.internalID = value; }
}
