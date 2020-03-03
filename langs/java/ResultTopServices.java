package ru.gbooking.apiv2;

import java.util.*;

public class ResultTopServices {
    private List<String> services;
    private boolean status;

    public List<String> getServices() { return services; }
    public void setServices(List<String> value) { this.services = value; }

    public boolean getStatus() { return status; }
    public void setStatus(boolean value) { this.status = value; }
}
