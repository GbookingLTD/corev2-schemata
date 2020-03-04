package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class Models {
    private Business business;
    private Client client;

    @JsonProperty("Business")
    public Business getBusiness() { return business; }
    @JsonProperty("Business")
    public void setBusiness(Business value) { this.business = value; }

    @JsonProperty("Client")
    public Client getClient() { return client; }
    @JsonProperty("Client")
    public void setClient(Client value) { this.client = value; }
}
