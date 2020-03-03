package ru.gbooking.apiv2;

import java.util.*;

public class ClientAddClientResponse {
    private ClientAddClientResponseResult result;
    private ClientAddClientResponseError error;
    private Double id;
    private String jsonrpc;

    public ClientAddClientResponseResult getResult() { return result; }
    public void setResult(ClientAddClientResponseResult value) { this.result = value; }

    /**
     * объект, содержащий информацию об ошибке
     */
    public ClientAddClientResponseError getError() { return error; }
    public void setError(ClientAddClientResponseError value) { this.error = value; }

    /**
     * значение числового типа для идентификации запроса на сервере
     */
    public Double getID() { return id; }
    public void setID(Double value) { this.id = value; }

    /**
     * версия протокола (2.0)
     */
    public String getJsonrpc() { return jsonrpc; }
    public void setJsonrpc(String value) { this.jsonrpc = value; }
}
