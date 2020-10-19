package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class AppointmentGetAppointmentByFilterResponse {
    private double id;
    private String jsonrpc;
    private AppointmentGetAppointmentByFilterResponseResult result;
    private AppointmentGetAppointmentByFilterResponseError error;

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
    public AppointmentGetAppointmentByFilterResponseResult getResult() { return result; }
    @JsonProperty("result")
    public void setResult(AppointmentGetAppointmentByFilterResponseResult value) { this.result = value; }

    /**
     * объект, содержащий информацию об ошибке
     */
    @JsonProperty("error")
    public AppointmentGetAppointmentByFilterResponseError getError() { return error; }
    @JsonProperty("error")
    public void setError(AppointmentGetAppointmentByFilterResponseError value) { this.error = value; }
}
