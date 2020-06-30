package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class CracCRACResourcesFreeByDateV2Response {
    private CracCRACResourcesFreeByDateV2ResponseError error;
    private double id;
    private CracCRACResourcesFreeByDateV2ResponseResult result;
    private String jsonrpc;

    /**
     * объект, содержащий информацию об ошибке
     */
    @JsonProperty("error")
    public CracCRACResourcesFreeByDateV2ResponseError getError() { return error; }
    @JsonProperty("error")
    public void setError(CracCRACResourcesFreeByDateV2ResponseError value) { this.error = value; }

    /**
     * значение числового типа для идентификации запроса на сервере
     */
    @JsonProperty("id")
    public double getID() { return id; }
    @JsonProperty("id")
    public void setID(double value) { this.id = value; }

    @JsonProperty("result")
    public CracCRACResourcesFreeByDateV2ResponseResult getResult() { return result; }
    @JsonProperty("result")
    public void setResult(CracCRACResourcesFreeByDateV2ResponseResult value) { this.result = value; }

    /**
     * версия протокола (2.0)
     */
    @JsonProperty("jsonrpc")
    public String getJsonrpc() { return jsonrpc; }
    @JsonProperty("jsonrpc")
    public void setJsonrpc(String value) { this.jsonrpc = value; }
}
