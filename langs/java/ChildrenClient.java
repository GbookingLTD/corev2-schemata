package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class ChildrenClient {
    private String clientID;
    private String extraID;
    private String middleName;
    private String name;
    private String surname;

    @JsonProperty("clientID")
    public String getClientID() { return clientID; }
    @JsonProperty("clientID")
    public void setClientID(String value) { this.clientID = value; }

    @JsonProperty("extraID")
    public String getExtraID() { return extraID; }
    @JsonProperty("extraID")
    public void setExtraID(String value) { this.extraID = value; }

    @JsonProperty("middleName")
    public String getMiddleName() { return middleName; }
    @JsonProperty("middleName")
    public void setMiddleName(String value) { this.middleName = value; }

    @JsonProperty("name")
    public String getName() { return name; }
    @JsonProperty("name")
    public void setName(String value) { this.name = value; }

    @JsonProperty("surname")
    public String getSurname() { return surname; }
    @JsonProperty("surname")
    public void setSurname(String value) { this.surname = value; }
}
