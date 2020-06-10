package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class SocialNetworkSchema {
    private String handle;
    private String id;
    private SocialNetwork socialNetwork;
    private String url;

    @JsonProperty("handle")
    public String getHandle() { return handle; }
    @JsonProperty("handle")
    public void setHandle(String value) { this.handle = value; }

    /**
     * network id
     */
    @JsonProperty("id")
    public String getID() { return id; }
    @JsonProperty("id")
    public void setID(String value) { this.id = value; }

    @JsonProperty("social_network")
    public SocialNetwork getSocialNetwork() { return socialNetwork; }
    @JsonProperty("social_network")
    public void setSocialNetwork(SocialNetwork value) { this.socialNetwork = value; }

    @JsonProperty("url")
    public String getURL() { return url; }
    @JsonProperty("url")
    public void setURL(String value) { this.url = value; }
}
