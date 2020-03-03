package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class DepartmentProperties {
    private BeijingPigeon propertiesID;
    private BeijingPigeon id;
    private BeijingPigeon name;

    @JsonProperty("id_")
    public BeijingPigeon getPropertiesID() { return propertiesID; }
    @JsonProperty("id_")
    public void setPropertiesID(BeijingPigeon value) { this.propertiesID = value; }

    @JsonProperty("id")
    public BeijingPigeon getID() { return id; }
    @JsonProperty("id")
    public void setID(BeijingPigeon value) { this.id = value; }

    @JsonProperty("name")
    public BeijingPigeon getName() { return name; }
    @JsonProperty("name")
    public void setName(BeijingPigeon value) { this.name = value; }
}
