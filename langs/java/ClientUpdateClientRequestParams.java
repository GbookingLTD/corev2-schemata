package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

/**
 * параметры запроса
 */
public class ClientUpdateClientRequestParams {
    private BraggadociousBusiness business;
    private ClientClass client;
    private IndigoNetwork network;

    @JsonProperty("business")
    public BraggadociousBusiness getBusiness() { return business; }
    @JsonProperty("business")
    public void setBusiness(BraggadociousBusiness value) { this.business = value; }

    @JsonProperty("client")
    public ClientClass getClient() { return client; }
    @JsonProperty("client")
    public void setClient(ClientClass value) { this.client = value; }

    @JsonProperty("network")
    public IndigoNetwork getNetwork() { return network; }
    @JsonProperty("network")
    public void setNetwork(IndigoNetwork value) { this.network = value; }
}
