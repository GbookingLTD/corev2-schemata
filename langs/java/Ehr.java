package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class Ehr {
    private Boolean active;
    private String host;
    private String path;
    private String port;
    private String protocol;

    @JsonProperty("active")
    public Boolean getActive() { return active; }
    @JsonProperty("active")
    public void setActive(Boolean value) { this.active = value; }

    @JsonProperty("host")
    public String getHost() { return host; }
    @JsonProperty("host")
    public void setHost(String value) { this.host = value; }

    @JsonProperty("path")
    public String getPath() { return path; }
    @JsonProperty("path")
    public void setPath(String value) { this.path = value; }

    @JsonProperty("port")
    public String getPort() { return port; }
    @JsonProperty("port")
    public void setPort(String value) { this.port = value; }

    @JsonProperty("protocol")
    public String getProtocol() { return protocol; }
    @JsonProperty("protocol")
    public void setProtocol(String value) { this.protocol = value; }
}
