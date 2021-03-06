package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;
import java.util.List;

public class ClientAddClientResponseResult {
    private BraggadociousBusiness business;
    private ClientClass client;
    private List<String> documents;
    private PurpleProfile profile;
    private Source source;

    @JsonProperty("business")
    public BraggadociousBusiness getBusiness() { return business; }
    @JsonProperty("business")
    public void setBusiness(BraggadociousBusiness value) { this.business = value; }

    @JsonProperty("client")
    public ClientClass getClient() { return client; }
    @JsonProperty("client")
    public void setClient(ClientClass value) { this.client = value; }

    @JsonProperty("documents")
    public List<String> getDocuments() { return documents; }
    @JsonProperty("documents")
    public void setDocuments(List<String> value) { this.documents = value; }

    @JsonProperty("profile")
    public PurpleProfile getProfile() { return profile; }
    @JsonProperty("profile")
    public void setProfile(PurpleProfile value) { this.profile = value; }

    @JsonProperty("source")
    public Source getSource() { return source; }
    @JsonProperty("source")
    public void setSource(Source value) { this.source = value; }
}
