package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class ClientAddClientResponseResult {
    private HilariousBusiness business;
    private ClientClass client;
    private List<Object> documents;
    private PurpleProfile profile;

    @JsonProperty("business")
    public HilariousBusiness getBusiness() { return business; }
    @JsonProperty("business")
    public void setBusiness(HilariousBusiness value) { this.business = value; }

    @JsonProperty("client")
    public ClientClass getClient() { return client; }
    @JsonProperty("client")
    public void setClient(ClientClass value) { this.client = value; }

    @JsonProperty("documents")
    public List<Object> getDocuments() { return documents; }
    @JsonProperty("documents")
    public void setDocuments(List<Object> value) { this.documents = value; }

    @JsonProperty("profile")
    public PurpleProfile getProfile() { return profile; }
    @JsonProperty("profile")
    public void setProfile(PurpleProfile value) { this.profile = value; }
}
