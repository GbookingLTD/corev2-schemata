package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

/**
 * параметры запроса
 */
public class ClientAddClientRequestParams {
    private IndecentBusiness business;
    private ClientClass client;
    private ParamsProfile profile;
    private Boolean skipEmailCheck;
    private Boolean skipProfileUpdate;

    @JsonProperty("business")
    public IndecentBusiness getBusiness() { return business; }
    @JsonProperty("business")
    public void setBusiness(IndecentBusiness value) { this.business = value; }

    @JsonProperty("client")
    public ClientClass getClient() { return client; }
    @JsonProperty("client")
    public void setClient(ClientClass value) { this.client = value; }

    @JsonProperty("profile")
    public ParamsProfile getProfile() { return profile; }
    @JsonProperty("profile")
    public void setProfile(ParamsProfile value) { this.profile = value; }

    @JsonProperty("skipEmailCheck")
    public Boolean getSkipEmailCheck() { return skipEmailCheck; }
    @JsonProperty("skipEmailCheck")
    public void setSkipEmailCheck(Boolean value) { this.skipEmailCheck = value; }

    @JsonProperty("skipProfileUpdate")
    public Boolean getSkipProfileUpdate() { return skipProfileUpdate; }
    @JsonProperty("skipProfileUpdate")
    public void setSkipProfileUpdate(Boolean value) { this.skipProfileUpdate = value; }
}
