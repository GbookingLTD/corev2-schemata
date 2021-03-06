package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;
import java.util.List;

/**
 * данные, передаваемые в ответ
 */
public class AppointmentGetAppointmentByFilterResponseResult {
    private List<Appointment> data;
    private double page;
    private double total;
    private double unconfirmed;

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
    public double getUnconfirmed() { return unconfirmed; }
    @JsonProperty("unconfirmed")
    public void setUnconfirmed(double value) { this.unconfirmed = value; }
}
