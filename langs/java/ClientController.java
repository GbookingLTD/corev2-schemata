package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class ClientController {
    private AddClient addClient;

    @JsonProperty("add_client")
    public AddClient getAddClient() { return addClient; }
    @JsonProperty("add_client")
    public void setAddClient(AddClient value) { this.addClient = value; }
}
