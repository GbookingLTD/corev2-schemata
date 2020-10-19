package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;
import java.util.Map;

public class SuccessResponseClass {
    private double id;
    private String jsonrpc;
    private Map<String, Object> result;

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
    public Map<String, Object> getResult() { return result; }
    @JsonProperty("result")
    public void setResult(Map<String, Object> value) { this.result = value; }
}
