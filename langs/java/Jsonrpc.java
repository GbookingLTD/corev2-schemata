package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class Jsonrpc {
    private String description;
    private TypeElement type;
    private String jsonrpcConst;

    @JsonProperty("description")
    public String getDescription() { return description; }
    @JsonProperty("description")
    public void setDescription(String value) { this.description = value; }

    @JsonProperty("type")
    public TypeElement getType() { return type; }
    @JsonProperty("type")
    public void setType(TypeElement value) { this.type = value; }

    @JsonProperty("const")
    public String getJsonrpcConst() { return jsonrpcConst; }
    @JsonProperty("const")
    public void setJsonrpcConst(String value) { this.jsonrpcConst = value; }
}
