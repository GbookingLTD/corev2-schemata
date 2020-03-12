package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class CracSlotsGetCRACDistributedResourcesAndRoomsRequest {
    private Cred cred;
    private RequestTimeFrameDate id;
    private String jsonrpc;
    private String method;
    private CracSlotsGetCRACDistributedResourcesAndRoomsRequestParams params;

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
    public RequestTimeFrameDate getID() { return id; }
    @JsonProperty("id")
    public void setID(RequestTimeFrameDate value) { this.id = value; }

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
    public CracSlotsGetCRACDistributedResourcesAndRoomsRequestParams getParams() { return params; }
    @JsonProperty("params")
    public void setParams(CracSlotsGetCRACDistributedResourcesAndRoomsRequestParams value) { this.params = value; }
}
