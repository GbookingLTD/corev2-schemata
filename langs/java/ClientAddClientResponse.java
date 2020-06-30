package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class ClientAddClientResponse {
    private ClientAddClientResponseResult result;
    private ClientAddClientResponseError error;
    private Double id;
    private String jsonrpc;

    @JsonProperty("result")
    public ClientAddClientResponseResult getResult() { return result; }
    @JsonProperty("result")
    public void setResult(ClientAddClientResponseResult value) { this.result = value; }

    /**
     * объект, содержащий информацию об ошибке
     */
    @JsonProperty("error")
    public ClientAddClientResponseError getError() { return error; }
    @JsonProperty("error")
    public void setError(ClientAddClientResponseError value) { this.error = value; }

    /**
     * значение числового типа для идентификации запроса на сервере
     */
    @JsonProperty("id")
    public Double getID() { return id; }
    @JsonProperty("id")
    public void setID(Double value) { this.id = value; }

    /**
     * версия протокола (2.0)
     */
    @JsonProperty("jsonrpc")
    public String getJsonrpc() { return jsonrpc; }
    @JsonProperty("jsonrpc")
    public void setJsonrpc(String value) { this.jsonrpc = value; }
}
