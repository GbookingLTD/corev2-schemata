package ru.gbooking.apiv2;

import java.util.*;

/**
 * параметры запроса
 */
public class ClientAddClientRequestParams {
    private FluffyBusiness business;
    private Client client;
    private ParamsProfile profile;
    private Boolean skipEmailCheck;
    private Boolean skipProfileUpdate;

    public FluffyBusiness getBusiness() { return business; }
    public void setBusiness(FluffyBusiness value) { this.business = value; }

    public Client getClient() { return client; }
    public void setClient(Client value) { this.client = value; }

    public ParamsProfile getProfile() { return profile; }
    public void setProfile(ParamsProfile value) { this.profile = value; }

    public Boolean getSkipEmailCheck() { return skipEmailCheck; }
    public void setSkipEmailCheck(Boolean value) { this.skipEmailCheck = value; }

    public Boolean getSkipProfileUpdate() { return skipProfileUpdate; }
    public void setSkipProfileUpdate(Boolean value) { this.skipProfileUpdate = value; }
}
