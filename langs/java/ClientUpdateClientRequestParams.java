package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

/**
 * параметры запроса
 */
public class ClientUpdateClientRequestParams {
    private MagentaBusiness business;
    private ClientClass client;
    private TentacledNetwork network;

    @JsonProperty("business")
    public MagentaBusiness getBusiness() { return business; }
    @JsonProperty("business")
    public void setBusiness(MagentaBusiness value) { this.business = value; }

    @JsonProperty("client")
    public ClientClass getClient() { return client; }
    @JsonProperty("client")
    public void setClient(ClientClass value) { this.client = value; }

    @JsonProperty("network")
    public TentacledNetwork getNetwork() { return network; }
    @JsonProperty("network")
    public void setNetwork(TentacledNetwork value) { this.network = value; }
}
