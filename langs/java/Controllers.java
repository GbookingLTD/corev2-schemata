package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class Controllers {
    private BusinessController business;
    private ClientController client;

    @JsonProperty("Business")
    public BusinessController getBusiness() { return business; }
    @JsonProperty("Business")
    public void setBusiness(BusinessController value) { this.business = value; }

    @JsonProperty("Client")
    public ClientController getClient() { return client; }
    @JsonProperty("Client")
    public void setClient(ClientController value) { this.client = value; }
}
