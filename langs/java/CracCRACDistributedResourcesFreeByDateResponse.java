package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class CracCRACDistributedResourcesFreeByDateResponse {
    private CracCRACDistributedResourcesFreeByDateResponseError error;
    private double id;
    private CracCRACDistributedResourcesFreeByDateResponseResult result;
    private String jsonrpc;

    /**
     * объект, содержащий информацию об ошибке
     */
    @JsonProperty("error")
    public CracCRACDistributedResourcesFreeByDateResponseError getError() { return error; }
    @JsonProperty("error")
    public void setError(CracCRACDistributedResourcesFreeByDateResponseError value) { this.error = value; }

    /**
     * значение числового типа для идентификации запроса на сервере
     */
    @JsonProperty("id")
    public double getID() { return id; }
    @JsonProperty("id")
    public void setID(double value) { this.id = value; }

    @JsonProperty("result")
    public CracCRACDistributedResourcesFreeByDateResponseResult getResult() { return result; }
    @JsonProperty("result")
    public void setResult(CracCRACDistributedResourcesFreeByDateResponseResult value) { this.result = value; }

    /**
     * версия протокола (2.0)
     */
    @JsonProperty("jsonrpc")
    public String getJsonrpc() { return jsonrpc; }
    @JsonProperty("jsonrpc")
    public void setJsonrpc(String value) { this.jsonrpc = value; }
}
