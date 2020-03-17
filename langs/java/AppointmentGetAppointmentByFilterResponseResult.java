package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

/**
 * данные, передаваемые в ответ
 */
public class AppointmentGetAppointmentByFilterResponseResult {
    private List<AppointmentElement> data;
    private double page;
    private double total;
    private double unconfirmed;

    @JsonProperty("data")
    public List<AppointmentElement> getData() { return data; }
    @JsonProperty("data")
    public void setData(List<AppointmentElement> value) { this.data = value; }

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
