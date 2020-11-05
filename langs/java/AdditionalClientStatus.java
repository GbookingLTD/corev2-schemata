package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;
import java.util.List;
import java.util.Map;

public class AdditionalClientStatus {
    private String id;
    private String clientID;
    private List<Map<String, Object>> history;
    private AppointmentStatus status;

    @JsonProperty("_id")
    public String getID() { return id; }
    @JsonProperty("_id")
    public void setID(String value) { this.id = value; }

    @JsonProperty("clientID")
    public String getClientID() { return clientID; }
    @JsonProperty("clientID")
    public void setClientID(String value) { this.clientID = value; }

    @JsonProperty("history")
    public List<Map<String, Object>> getHistory() { return history; }
    @JsonProperty("history")
    public void setHistory(List<Map<String, Object>> value) { this.history = value; }

    @JsonProperty("status")
    public AppointmentStatus getStatus() { return status; }
    @JsonProperty("status")
    public void setStatus(AppointmentStatus value) { this.status = value; }
}
