package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class AppointmentGetAppointmentsByUserResponseResult {
    private List<Appointment> data;
    private double page;
    private double total;
    private Double unconfirmed;

    @JsonProperty("data")
    public List<Appointment> getData() { return data; }
    @JsonProperty("data")
    public void setData(List<Appointment> value) { this.data = value; }

    @JsonProperty("page")
    public double getPage() { return page; }
    @JsonProperty("page")
    public void setPage(double value) { this.page = value; }

    @JsonProperty("total")
    public double getTotal() { return total; }
    @JsonProperty("total")
    public void setTotal(double value) { this.total = value; }

    @JsonProperty("unconfirmed")
    public Double getUnconfirmed() { return unconfirmed; }
    @JsonProperty("unconfirmed")
    public void setUnconfirmed(Double value) { this.unconfirmed = value; }
}
