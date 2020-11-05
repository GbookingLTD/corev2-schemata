package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class BusinessGetProfileByIDResponse {
    private Double id;
    private String jsonrpc;
    private BusinessGetProfileByIDResponseResult result;
    private BusinessGetProfileByIDResponseError error;

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

    /**
     * данные, передаваемые в ответ
     */
    @JsonProperty("result")
    public BusinessGetProfileByIDResponseResult getResult() { return result; }
    @JsonProperty("result")
    public void setResult(BusinessGetProfileByIDResponseResult value) { this.result = value; }

    /**
     * объект, содержащий информацию об ошибке
     */
    @JsonProperty("error")
    public BusinessGetProfileByIDResponseError getError() { return error; }
    @JsonProperty("error")
    public void setError(BusinessGetProfileByIDResponseError value) { this.error = value; }
}
