package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class Present {
    private String code;
    private String extraID;
    private String name;
    private PresentStatus status;

    @JsonProperty("code")
    public String getCode() { return code; }
    @JsonProperty("code")
    public void setCode(String value) { this.code = value; }

    @JsonProperty("extraID")
    public String getExtraID() { return extraID; }
    @JsonProperty("extraID")
    public void setExtraID(String value) { this.extraID = value; }

    @JsonProperty("name")
    public String getName() { return name; }
    @JsonProperty("name")
    public void setName(String value) { this.name = value; }

    @JsonProperty("status")
    public PresentStatus getStatus() { return status; }
    @JsonProperty("status")
    public void setStatus(PresentStatus value) { this.status = value; }
}
