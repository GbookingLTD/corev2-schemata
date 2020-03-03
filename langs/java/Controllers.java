package ru.gbooking.apiv2;

import java.util.*;

public class Controllers {
    private BusinessController business;
    private ClientController client;

    public BusinessController getBusiness() { return business; }
    public void setBusiness(BusinessController value) { this.business = value; }

    public ClientController getClient() { return client; }
    public void setClient(ClientController value) { this.client = value; }
}
