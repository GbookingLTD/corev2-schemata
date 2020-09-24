package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class BusinessDepartment {
    private String id;
    private Double departmentID;
    private String name;

    @JsonProperty("id")
    public String getID() { return id; }
    @JsonProperty("id")
    public void setID(String value) { this.id = value; }

    @JsonProperty("id_")
    public Double getDepartmentID() { return departmentID; }
    @JsonProperty("id_")
    public void setDepartmentID(Double value) { this.departmentID = value; }

    @JsonProperty("name")
    public String getName() { return name; }
    @JsonProperty("name")
    public void setName(String value) { this.name = value; }
}
