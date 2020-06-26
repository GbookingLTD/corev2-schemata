package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class Statistics {
    private Double appointmentsCount;
    private List<Map<String, Object>> businesses;
    private String lastAppointment;
    private String lastBusinessID;
    private String lastWorkerID;
    private List<Map<String, Object>> services;
    private List<Object> totalPrices;

    @JsonProperty("appointmentsCount")
    public Double getAppointmentsCount() { return appointmentsCount; }
    @JsonProperty("appointmentsCount")
    public void setAppointmentsCount(Double value) { this.appointmentsCount = value; }

    @JsonProperty("businesses")
    public List<Map<String, Object>> getBusinesses() { return businesses; }
    @JsonProperty("businesses")
    public void setBusinesses(List<Map<String, Object>> value) { this.businesses = value; }

    @JsonProperty("lastAppointment")
    public String getLastAppointment() { return lastAppointment; }
    @JsonProperty("lastAppointment")
    public void setLastAppointment(String value) { this.lastAppointment = value; }

    @JsonProperty("lastBusinessId")
    public String getLastBusinessID() { return lastBusinessID; }
    @JsonProperty("lastBusinessId")
    public void setLastBusinessID(String value) { this.lastBusinessID = value; }

    @JsonProperty("lastWorkerId")
    public String getLastWorkerID() { return lastWorkerID; }
    @JsonProperty("lastWorkerId")
    public void setLastWorkerID(String value) { this.lastWorkerID = value; }

    @JsonProperty("services")
    public List<Map<String, Object>> getServices() { return services; }
    @JsonProperty("services")
    public void setServices(List<Map<String, Object>> value) { this.services = value; }

    @JsonProperty("totalPrices")
    public List<Object> getTotalPrices() { return totalPrices; }
    @JsonProperty("totalPrices")
    public void setTotalPrices(List<Object> value) { this.totalPrices = value; }
}
