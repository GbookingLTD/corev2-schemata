package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

/**
 * параметры запроса
 */
public class ClientAddClientRequestParams {
    private HilariousBusiness business;
    private Client client;
    private ParamsProfile profile;
    private Boolean skipEmailCheck;
    private Boolean skipProfileUpdate;

    @JsonProperty("business")
    public HilariousBusiness getBusiness() { return business; }
    @JsonProperty("business")
    public void setBusiness(HilariousBusiness value) { this.business = value; }

    @JsonProperty("client")
    public Client getClient() { return client; }
    @JsonProperty("client")
    public void setClient(Client value) { this.client = value; }

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