package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class AppointmentFinishAppointmentResponse {
    private double id;
    private String jsonrpc;
    private Boolean result;
    private AppointmentFinishAppointmentResponseError error;

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

    /**
     * данные, передаваемые в ответ
     */
    @JsonProperty("result")
    public Boolean getResult() { return result; }
    @JsonProperty("result")
    public void setResult(Boolean value) { this.result = value; }

    /**
     * объект, содержащий информацию об ошибке
     */
    @JsonProperty("error")
    public AppointmentFinishAppointmentResponseError getError() { return error; }
    @JsonProperty("error")
    public void setError(AppointmentFinishAppointmentResponseError value) { this.error = value; }
}
