package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

/**
 * данные, передаваемые в ответ
 */
public class AppointmentGetAppointmentsByUserResponseResult {
    private List<Appointment> data;

    @JsonProperty("data")
    public List<Appointment> getData() { return data; }
    @JsonProperty("data")
    public void setData(List<Appointment> value) { this.data = value; }
}
