package ru.gbooking.apiv2;

import java.util.*;

public class SocialNetworkSchema {
    private String handle;
    private String id;
    private SocialNetwork socialNetwork;
    private String url;

    public String getHandle() { return handle; }
    public void setHandle(String value) { this.handle = value; }

    /**
     * network id
     */
    public String getID() { return id; }
    public void setID(String value) { this.id = value; }

    public SocialNetwork getSocialNetwork() { return socialNetwork; }
    public void setSocialNetwork(SocialNetwork value) { this.socialNetwork = value; }

    public String getURL() { return url; }
    public void setURL(String value) { this.url = value; }
}
