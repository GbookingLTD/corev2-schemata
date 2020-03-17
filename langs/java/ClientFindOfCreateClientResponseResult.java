package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class ClientFindOfCreateClientResponseResult {
    private FriskyBusiness business;
    private ClientClass client;
    private List<Object> documents;
    private StickyProfile profile;

    @JsonProperty("business")
    public FriskyBusiness getBusiness() { return business; }
    @JsonProperty("business")
    public void setBusiness(FriskyBusiness value) { this.business = value; }

    @JsonProperty("client")
    public ClientClass getClient() { return client; }
    @JsonProperty("client")
    public void setClient(ClientClass value) { this.client = value; }

    @JsonProperty("documents")
    public List<Object> getDocuments() { return documents; }
    @JsonProperty("documents")
    public void setDocuments(List<Object> value) { this.documents = value; }

    @JsonProperty("profile")
    public StickyProfile getProfile() { return profile; }
    @JsonProperty("profile")
    public void setProfile(StickyProfile value) { this.profile = value; }
}
