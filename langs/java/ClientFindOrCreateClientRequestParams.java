package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

/**
 * параметры запроса
 */
public class ClientFindOrCreateClientRequestParams {
    private MagentaBusiness business;
    private FluffyNetwork network;
    private Boolean skipEmailCheck;
    private Boolean skipProfileUpdate;

    @JsonProperty("business")
    public MagentaBusiness getBusiness() { return business; }
    @JsonProperty("business")
    public void setBusiness(MagentaBusiness value) { this.business = value; }

    @JsonProperty("network")
    public FluffyNetwork getNetwork() { return network; }
    @JsonProperty("network")
    public void setNetwork(FluffyNetwork value) { this.network = value; }

    @JsonProperty("skipEmailCheck")
    public Boolean getSkipEmailCheck() { return skipEmailCheck; }
    @JsonProperty("skipEmailCheck")
    public void setSkipEmailCheck(Boolean value) { this.skipEmailCheck = value; }

    @JsonProperty("skipProfileUpdate")
    public Boolean getSkipProfileUpdate() { return skipProfileUpdate; }
    @JsonProperty("skipProfileUpdate")
    public void setSkipProfileUpdate(Boolean value) { this.skipProfileUpdate = value; }
}
