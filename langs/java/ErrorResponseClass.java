package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class ErrorResponseClass {
    private Error error;
    private double id;
    private String jsonrpc;

    /**
     * объект, содержащий информацию об ошибке
     */
    @JsonProperty("error")
    public Error getError() { return error; }
    @JsonProperty("error")
    public void setError(Error value) { this.error = value; }

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
}
