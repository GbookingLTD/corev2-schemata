package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

/**
 * параметры запроса
 */
public class ClientUpdateClientRequestParams {
    private Business3 business;
    private ClientClass client;
    private IndigoNetwork network;

    @JsonProperty("business")
    public Business3 getBusiness() { return business; }
    @JsonProperty("business")
    public void setBusiness(Business3 value) { this.business = value; }

    @JsonProperty("client")
    public ClientClass getClient() { return client; }
    @JsonProperty("client")
    public void setClient(ClientClass value) { this.client = value; }

    @JsonProperty("network")
    public IndigoNetwork getNetwork() { return network; }
    @JsonProperty("network")
    public void setNetwork(IndigoNetwork value) { this.network = value; }
}
