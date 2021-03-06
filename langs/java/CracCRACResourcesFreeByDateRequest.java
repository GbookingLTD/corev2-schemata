package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;
import java.util.List;

public class CracCRACResourcesFreeByDateRequest {
    private Cred cred;
    private BackofficeIDUnion id;
    private String jsonrpc;
    private String method;
    private List<CracCRACResourcesFreeByDateRequestParam> params;

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
     */
    @JsonProperty("params")
    public List<CracCRACResourcesFreeByDateRequestParam> getParams() { return params; }
    @JsonProperty("params")
    public void setParams(List<CracCRACResourcesFreeByDateRequestParam> value) { this.params = value; }
}
