package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class MarketingNotifications {
    private boolean accepted;
    private boolean active;
    private boolean useSMSAlphaName;

    @JsonProperty("accepted")
    public boolean getAccepted() { return accepted; }
    @JsonProperty("accepted")
    public void setAccepted(boolean value) { this.accepted = value; }

    @JsonProperty("active")
    public boolean getActive() { return active; }
    @JsonProperty("active")
    public void setActive(boolean value) { this.active = value; }

    @JsonProperty("useSmsAlphaName")
    public boolean getUseSMSAlphaName() { return useSMSAlphaName; }
    @JsonProperty("useSmsAlphaName")
    public void setUseSMSAlphaName(boolean value) { this.useSMSAlphaName = value; }
}
