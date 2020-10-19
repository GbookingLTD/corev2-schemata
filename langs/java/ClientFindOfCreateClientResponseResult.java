package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;
import java.util.List;

public class ClientFindOfCreateClientResponseResult {
    private Business1 business;
    private ClientClass client;
    private List<Object> documents;
    private FluffyProfile profile;

    @JsonProperty("business")
    public Business1 getBusiness() { return business; }
    @JsonProperty("business")
    public void setBusiness(Business1 value) { this.business = value; }

    @JsonProperty("client")
    public ClientClass getClient() { return client; }
    @JsonProperty("client")
    public void setClient(ClientClass value) { this.client = value; }

    @JsonProperty("documents")
    public List<Object> getDocuments() { return documents; }
    @JsonProperty("documents")
    public void setDocuments(List<Object> value) { this.documents = value; }

    @JsonProperty("profile")
    public FluffyProfile getProfile() { return profile; }
    @JsonProperty("profile")
    public void setProfile(FluffyProfile value) { this.profile = value; }
}
