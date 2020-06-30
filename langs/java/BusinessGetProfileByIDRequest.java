package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class BusinessGetProfileByIDRequest {
    private Cred cred;
    private BackofficeIDUnion id;
    private String jsonrpc;
    private String method;
    private BusinessGetProfileByIDRequestParams params;

    /**
     * авторизационные параметры
     */
    @JsonProperty("cred")
    public Cred getCred() { return cred; }
    @JsonProperty("cred")
    public void setCred(Cred value) { this.cred = value; }

    /**
     * значение числового типа для идентификации запроса на сервере
     */
    @JsonProperty("id")
    public BackofficeIDUnion getID() { return id; }
    @JsonProperty("id")
    public void setID(BackofficeIDUnion value) { this.id = value; }

    /**
     * версия протокола - 2.0
     */
    @JsonProperty("jsonrpc")
    public String getJsonrpc() { return jsonrpc; }
    @JsonProperty("jsonrpc")
    public void setJsonrpc(String value) { this.jsonrpc = value; }

    /**
     * название jsonrpc метода
     */
    @JsonProperty("method")
    public String getMethod() { return method; }
    @JsonProperty("method")
    public void setMethod(String value) { this.method = value; }

    /**
     * параметры запроса
     *
     * параметры запроса business.get_profile_by_id
     */
    @JsonProperty("params")
    public BusinessGetProfileByIDRequestParams getParams() { return params; }
    @JsonProperty("params")
    public void setParams(BusinessGetProfileByIDRequestParams value) { this.params = value; }
}
