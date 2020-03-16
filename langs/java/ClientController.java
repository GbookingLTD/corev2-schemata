package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class ClientController {
    private AddClient addClient;
    private FindOrCreateClient findOrCreateClient;

    @JsonProperty("add_client")
    public AddClient getAddClient() { return addClient; }
    @JsonProperty("add_client")
    public void setAddClient(AddClient value) { this.addClient = value; }

    @JsonProperty("find_or_create_client")
    public FindOrCreateClient getFindOrCreateClient() { return findOrCreateClient; }
    @JsonProperty("find_or_create_client")
    public void setFindOrCreateClient(FindOrCreateClient value) { this.findOrCreateClient = value; }
}
