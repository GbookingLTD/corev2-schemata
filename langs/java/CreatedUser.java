package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class CreatedUser {
    private String email;
    private String id;
    private String middleName;
    private String name;
    private String surname;

    @JsonProperty("email")
    public String getEmail() { return email; }
    @JsonProperty("email")
    public void setEmail(String value) { this.email = value; }

    @JsonProperty("id")
    public String getID() { return id; }
    @JsonProperty("id")
    public void setID(String value) { this.id = value; }

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
