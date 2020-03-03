package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class ResourceProfileProperties {
    private HammerfestPonies email;
    private HammerfestPonies profileID;
    private HammerfestPonies userID;
    private TypeClass accessType;

    @JsonProperty("email")
    public HammerfestPonies getEmail() { return email; }
    @JsonProperty("email")
    public void setEmail(HammerfestPonies value) { this.email = value; }

    @JsonProperty("profileID")
    public HammerfestPonies getProfileID() { return profileID; }
    @JsonProperty("profileID")
    public void setProfileID(HammerfestPonies value) { this.profileID = value; }

    @JsonProperty("userID")
    public HammerfestPonies getUserID() { return userID; }
    @JsonProperty("userID")
    public void setUserID(HammerfestPonies value) { this.userID = value; }

    @JsonProperty("accessType")
    public TypeClass getAccessType() { return accessType; }
    @JsonProperty("accessType")
    public void setAccessType(TypeClass value) { this.accessType = value; }
}
