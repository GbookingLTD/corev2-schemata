package ru.gbooking.apiv2;

import java.util.*;

public class ClientAddClientResponseResult {
    private ResultBusiness business;
    private Client client;
    private List<Object> documents;
    private ResultProfile profile;

    public ResultBusiness getBusiness() { return business; }
    public void setBusiness(ResultBusiness value) { this.business = value; }

    public Client getClient() { return client; }
    public void setClient(Client value) { this.client = value; }

    public List<Object> getDocuments() { return documents; }
    public void setDocuments(List<Object> value) { this.documents = value; }

    public ResultProfile getProfile() { return profile; }
    public void setProfile(ResultProfile value) { this.profile = value; }
}
