package ru.gbooking.apiv2;

import java.util.*;

public class BusinessGetProfileByIDResponse {
    private Double id;
    private String jsonrpc;
    private BusinessGetProfileByIDResponseResult result;
    private BusinessGetProfileByIDResponseError error;

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

    /**
     * данные, передаваемые в ответ
     */
    public BusinessGetProfileByIDResponseResult getResult() { return result; }
    public void setResult(BusinessGetProfileByIDResponseResult value) { this.result = value; }

    /**
     * объект, содержащий информацию об ошибке
     */
    public BusinessGetProfileByIDResponseError getError() { return error; }
    public void setError(BusinessGetProfileByIDResponseError value) { this.error = value; }
}
