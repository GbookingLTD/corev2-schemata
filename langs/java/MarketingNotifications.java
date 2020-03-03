package ru.gbooking.apiv2;

import java.util.*;

public class MarketingNotifications {
    private boolean accepted;
    private boolean active;
    private boolean useSMSAlphaName;

    public boolean getAccepted() { return accepted; }
    public void setAccepted(boolean value) { this.accepted = value; }

    public boolean getActive() { return active; }
    public void setActive(boolean value) { this.active = value; }

    public boolean getUseSMSAlphaName() { return useSMSAlphaName; }
    public void setUseSMSAlphaName(boolean value) { this.useSMSAlphaName = value; }
}
