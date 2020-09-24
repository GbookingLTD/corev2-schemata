package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

/**
 * параметры запроса
 */
public class ClientUpdateClientInfoRequestParams {
    private Business1 business;
    private IndigoClient client;
    private IndecentNetwork network;

    @JsonProperty("business")
    public Business1 getBusiness() { return business; }
    @JsonProperty("business")
    public void setBusiness(Business1 value) { this.business = value; }

    @JsonProperty("client")
    public IndigoClient getClient() { return client; }
    @JsonProperty("client")
    public void setClient(IndigoClient value) { this.client = value; }

    @JsonProperty("network")
    public IndecentNetwork getNetwork() { return network; }
    @JsonProperty("network")
    public void setNetwork(IndecentNetwork value) { this.network = value; }
}
