package ru.gbooking.apiv2;

import java.util.*;

public class BusinessGetProfileByIDRequest {
    private Cred cred;
    private BusinessGetProfileByIDRequestTimeFrameDate id;
    private String jsonrpc;
    private String method;
    private BusinessGetProfileByIDRequestParams params;

    /**
     * авторизационные параметры
     */
    public Cred getCred() { return cred; }
    public void setCred(Cred value) { this.cred = value; }

    /**
     * значение числового типа для идентификации запроса на сервере
     */
    public BusinessGetProfileByIDRequestTimeFrameDate getID() { return id; }
    public void setID(BusinessGetProfileByIDRequestTimeFrameDate value) { this.id = value; }

    /**
     * версия протокола - 2.0
     */
    public String getJsonrpc() { return jsonrpc; }
    public void setJsonrpc(String value) { this.jsonrpc = value; }

    /**
     * название jsonrpc метода
     */
    public String getMethod() { return method; }
    public void setMethod(String value) { this.method = value; }

    /**
     * параметры запроса
     */
    public BusinessGetProfileByIDRequestParams getParams() { return params; }
    public void setParams(BusinessGetProfileByIDRequestParams value) { this.params = value; }
}
