package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

/**
 * параметры запроса
 */
public class ClientUpdateClientInfoRequestParams {
    private BraggadociousBusiness business;
    private IndigoClient client;
    private IndecentNetwork network;

    @JsonProperty("business")
    public BraggadociousBusiness getBusiness() { return business; }
    @JsonProperty("business")
    public void setBusiness(BraggadociousBusiness value) { this.business = value; }

    @JsonProperty("client")
    public IndigoClient getClient() { return client; }
    @JsonProperty("client")
    public void setClient(IndigoClient value) { this.client = value; }

    @JsonProperty("network")
    public IndecentNetwork getNetwork() { return network; }
    @JsonProperty("network")
    public void setNetwork(IndecentNetwork value) { this.network = value; }
}
