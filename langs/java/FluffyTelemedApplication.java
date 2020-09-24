package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class FluffyTelemedApplication {
    private String appleAppName;
    private String googleAppName;
    private String urlAppSchema;

    @JsonProperty("appleAppName")
    public String getAppleAppName() { return appleAppName; }
    @JsonProperty("appleAppName")
    public void setAppleAppName(String value) { this.appleAppName = value; }

    @JsonProperty("googleAppName")
    public String getGoogleAppName() { return googleAppName; }
    @JsonProperty("googleAppName")
    public void setGoogleAppName(String value) { this.googleAppName = value; }

    @JsonProperty("urlAppSchema")
    public String getURLAppSchema() { return urlAppSchema; }
    @JsonProperty("urlAppSchema")
    public void setURLAppSchema(String value) { this.urlAppSchema = value; }
}
