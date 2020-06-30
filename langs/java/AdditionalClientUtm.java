package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;
import java.util.Map;

public class AdditionalClientUtm {
    private String id;
    private String clientID;
    private Map<String, Object> utm;

    @JsonProperty("_id")
    public String getID() { return id; }
    @JsonProperty("_id")
    public void setID(String value) { this.id = value; }

    @JsonProperty("clientID")
    public String getClientID() { return clientID; }
    @JsonProperty("clientID")
    public void setClientID(String value) { this.clientID = value; }

    @JsonProperty("utm")
    public Map<String, Object> getUtm() { return utm; }
    @JsonProperty("utm")
    public void setUtm(Map<String, Object> value) { this.utm = value; }
}
