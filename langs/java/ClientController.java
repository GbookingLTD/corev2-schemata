package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class ClientController {
    private AddClient addClient;
    private FindOrCreateClient findOrCreateClient;
    private UpdateClient updateClient;
    private UpdateClientInfo updateClientInfo;

    @JsonProperty("add_client")
    public AddClient getAddClient() { return addClient; }
    @JsonProperty("add_client")
    public void setAddClient(AddClient value) { this.addClient = value; }

    @JsonProperty("find_or_create_client")
    public FindOrCreateClient getFindOrCreateClient() { return findOrCreateClient; }
    @JsonProperty("find_or_create_client")
    public void setFindOrCreateClient(FindOrCreateClient value) { this.findOrCreateClient = value; }

    @JsonProperty("update_client")
    public UpdateClient getUpdateClient() { return updateClient; }
    @JsonProperty("update_client")
    public void setUpdateClient(UpdateClient value) { this.updateClient = value; }

    @JsonProperty("update_client_info")
    public UpdateClientInfo getUpdateClientInfo() { return updateClientInfo; }
    @JsonProperty("update_client_info")
    public void setUpdateClientInfo(UpdateClientInfo value) { this.updateClientInfo = value; }
}
