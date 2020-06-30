package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;
import java.util.List;

public class AppointmentGetAppointmentsByUserResponse {
    private double id;
    private String jsonrpc;
    private List<Appointment> result;
    private AppointmentGetAppointmentsByUserResponseError error;

    /**
     * значение числового типа для идентификации запроса на сервере
     */
    @JsonProperty("id")
    public double getID() { return id; }
    @JsonProperty("id")
    public void setID(double value) { this.id = value; }

    /**
     * версия протокола (2.0)
     */
    @JsonProperty("jsonrpc")
    public String getJsonrpc() { return jsonrpc; }
    @JsonProperty("jsonrpc")
    public void setJsonrpc(String value) { this.jsonrpc = value; }

    @JsonProperty("result")
    public List<Appointment> getResult() { return result; }
    @JsonProperty("result")
    public void setResult(List<Appointment> value) { this.result = value; }

    /**
     * объект, содержащий информацию об ошибке
     */
    @JsonProperty("error")
    public AppointmentGetAppointmentsByUserResponseError getError() { return error; }
    @JsonProperty("error")
    public void setError(AppointmentGetAppointmentsByUserResponseError value) { this.error = value; }
}
