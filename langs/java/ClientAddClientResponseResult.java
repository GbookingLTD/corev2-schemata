package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class ClientAddClientResponseResult {
    private AmbitiousBusiness business;
    private Client client;
    private List<Object> documents;
    private ResultProfile profile;

    @JsonProperty("business")
    public AmbitiousBusiness getBusiness() { return business; }
    @JsonProperty("business")
    public void setBusiness(AmbitiousBusiness value) { this.business = value; }

    @JsonProperty("client")
    public Client getClient() { return client; }
    @JsonProperty("client")
    public void setClient(Client value) { this.client = value; }

    @JsonProperty("documents")
    public List<Object> getDocuments() { return documents; }
    @JsonProperty("documents")
    public void setDocuments(List<Object> value) { this.documents = value; }

    @JsonProperty("profile")
    public ResultProfile getProfile() { return profile; }
    @JsonProperty("profile")
    public void setProfile(ResultProfile value) { this.profile = value; }
}
