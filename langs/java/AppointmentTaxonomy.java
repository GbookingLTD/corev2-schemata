package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class AppointmentTaxonomy {
    private String alias;
    private String extraID;
    private String id;

    @JsonProperty("alias")
    public String getAlias() { return alias; }
    @JsonProperty("alias")
    public void setAlias(String value) { this.alias = value; }

    @JsonProperty("extraId")
    public String getExtraID() { return extraID; }
    @JsonProperty("extraId")
    public void setExtraID(String value) { this.extraID = value; }

    @JsonProperty("id")
    public String getID() { return id; }
    @JsonProperty("id")
    public void setID(String value) { this.id = value; }
}
