package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

/**
 * параметры запроса
 */
public class ClientUpdateClientInfoRequestParams {
    private Business3 business;
    private IndigoClient client;
    private IndecentNetwork network;

    @JsonProperty("business")
    public Business3 getBusiness() { return business; }
    @JsonProperty("business")
    public void setBusiness(Business3 value) { this.business = value; }

    @JsonProperty("client")
    public IndigoClient getClient() { return client; }
    @JsonProperty("client")
    public void setClient(IndigoClient value) { this.client = value; }

    @JsonProperty("network")
    public IndecentNetwork getNetwork() { return network; }
    @JsonProperty("network")
    public void setNetwork(IndecentNetwork value) { this.network = value; }
}
