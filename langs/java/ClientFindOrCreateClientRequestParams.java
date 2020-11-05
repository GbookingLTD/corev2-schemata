package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

/**
 * параметры запроса
 */
public class ClientFindOrCreateClientRequestParams {
    private Business1 business;
    private ClientClass client;
    private StickyNetwork network;
    private Boolean skipEmailCheck;
    private Boolean skipProfileUpdate;

    @JsonProperty("business")
    public Business1 getBusiness() { return business; }
    @JsonProperty("business")
    public void setBusiness(Business1 value) { this.business = value; }

    @JsonProperty("client")
    public ClientClass getClient() { return client; }
    @JsonProperty("client")
    public void setClient(ClientClass value) { this.client = value; }

    @JsonProperty("network")
    public StickyNetwork getNetwork() { return network; }
    @JsonProperty("network")
    public void setNetwork(StickyNetwork value) { this.network = value; }

    @JsonProperty("skipEmailCheck")
    public Boolean getSkipEmailCheck() { return skipEmailCheck; }
    @JsonProperty("skipEmailCheck")
    public void setSkipEmailCheck(Boolean value) { this.skipEmailCheck = value; }

    @JsonProperty("skipProfileUpdate")
    public Boolean getSkipProfileUpdate() { return skipProfileUpdate; }
    @JsonProperty("skipProfileUpdate")
    public void setSkipProfileUpdate(Boolean value) { this.skipProfileUpdate = value; }
}
