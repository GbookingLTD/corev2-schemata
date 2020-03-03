package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class CommonProperties {
    private Jsonrpc jsonrpc;
    private ID id;
    private Error error;
    private Cred cred;
    private HammerfestPonies method;
    private HammerfestPonies params;
    private HammerfestPonies result;

    @JsonProperty("jsonrpc")
    public Jsonrpc getJsonrpc() { return jsonrpc; }
    @JsonProperty("jsonrpc")
    public void setJsonrpc(Jsonrpc value) { this.jsonrpc = value; }

    @JsonProperty("id")
    public ID getID() { return id; }
    @JsonProperty("id")
    public void setID(ID value) { this.id = value; }

    @JsonProperty("error")
    public Error getError() { return error; }
    @JsonProperty("error")
    public void setError(Error value) { this.error = value; }

    @JsonProperty("cred")
    public Cred getCred() { return cred; }
    @JsonProperty("cred")
    public void setCred(Cred value) { this.cred = value; }

    @JsonProperty("method")
    public HammerfestPonies getMethod() { return method; }
    @JsonProperty("method")
    public void setMethod(HammerfestPonies value) { this.method = value; }

    @JsonProperty("params")
    public HammerfestPonies getParams() { return params; }
    @JsonProperty("params")
    public void setParams(HammerfestPonies value) { this.params = value; }

    @JsonProperty("result")
    public HammerfestPonies getResult() { return result; }
    @JsonProperty("result")
    public void setResult(HammerfestPonies value) { this.result = value; }
}
