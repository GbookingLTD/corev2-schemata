package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class AdditionalClientUtm {
    private String clientID;
    private Map<String, Object> utm;

    @JsonProperty("clientID")
    public String getClientID() { return clientID; }
    @JsonProperty("clientID")
    public void setClientID(String value) { this.clientID = value; }

    @JsonProperty("utm")
    public Map<String, Object> getUtm() { return utm; }
    @JsonProperty("utm")
    public void setUtm(Map<String, Object> value) { this.utm = value; }
}
