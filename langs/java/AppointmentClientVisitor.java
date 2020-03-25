package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class AppointmentClientVisitor {
    private String birthday;
    private List<String> email;
    private Double extraVisitors;
    private String name;
    private String parentClientID;
    private String parentProfileID;
    private List<IncomingPhoneElement> phone;
    private Sex sex;

    @JsonProperty("birthday")
    public String getBirthday() { return birthday; }
    @JsonProperty("birthday")
    public void setBirthday(String value) { this.birthday = value; }

    @JsonProperty("email")
    public List<String> getEmail() { return email; }
    @JsonProperty("email")
    public void setEmail(List<String> value) { this.email = value; }

    @JsonProperty("extraVisitors")
    public Double getExtraVisitors() { return extraVisitors; }
    @JsonProperty("extraVisitors")
    public void setExtraVisitors(Double value) { this.extraVisitors = value; }

    @JsonProperty("name")
    public String getName() { return name; }
    @JsonProperty("name")
    public void setName(String value) { this.name = value; }

    @JsonProperty("parentClientID")
    public String getParentClientID() { return parentClientID; }
    @JsonProperty("parentClientID")
    public void setParentClientID(String value) { this.parentClientID = value; }

    @JsonProperty("parentProfileID")
    public String getParentProfileID() { return parentProfileID; }
    @JsonProperty("parentProfileID")
    public void setParentProfileID(String value) { this.parentProfileID = value; }

    @JsonProperty("phone")
    public List<IncomingPhoneElement> getPhone() { return phone; }
    @JsonProperty("phone")
    public void setPhone(List<IncomingPhoneElement> value) { this.phone = value; }

    @JsonProperty("sex")
    public Sex getSex() { return sex; }
    @JsonProperty("sex")
    public void setSex(Sex value) { this.sex = value; }
}
