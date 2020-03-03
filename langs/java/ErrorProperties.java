package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class ErrorProperties {
    private Code code;
    private HammerfestPonies message;
    private HammerfestPonies data;

    @JsonProperty("code")
    public Code getCode() { return code; }
    @JsonProperty("code")
    public void setCode(Code value) { this.code = value; }

    @JsonProperty("message")
    public HammerfestPonies getMessage() { return message; }
    @JsonProperty("message")
    public void setMessage(HammerfestPonies value) { this.message = value; }

    @JsonProperty("data")
    public HammerfestPonies getData() { return data; }
    @JsonProperty("data")
    public void setData(HammerfestPonies value) { this.data = value; }
}
