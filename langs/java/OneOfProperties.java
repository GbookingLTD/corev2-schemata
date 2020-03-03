package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class OneOfProperties {
    private HammerfestPonies user;
    private HammerfestPonies token;

    @JsonProperty("user")
    public HammerfestPonies getUser() { return user; }
    @JsonProperty("user")
    public void setUser(HammerfestPonies value) { this.user = value; }

    @JsonProperty("token")
    public HammerfestPonies getToken() { return token; }
    @JsonProperty("token")
    public void setToken(HammerfestPonies value) { this.token = value; }
}
