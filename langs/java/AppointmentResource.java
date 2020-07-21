package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class AppointmentResource {
    private String degree;
    private String description;
    private String experience;
    private String extraID;
    private String iconURL;
    private String id;
    private String middleName;
    private String name;
    private String profession;
    private String siteID;
    private String surname;

    @JsonProperty("degree")
    public String getDegree() { return degree; }
    @JsonProperty("degree")
    public void setDegree(String value) { this.degree = value; }

    @JsonProperty("description")
    public String getDescription() { return description; }
    @JsonProperty("description")
    public void setDescription(String value) { this.description = value; }

    @JsonProperty("experience")
    public String getExperience() { return experience; }
    @JsonProperty("experience")
    public void setExperience(String value) { this.experience = value; }

    @JsonProperty("extraID")
    public String getExtraID() { return extraID; }
    @JsonProperty("extraID")
    public void setExtraID(String value) { this.extraID = value; }

    @JsonProperty("icon_url")
    public String getIconURL() { return iconURL; }
    @JsonProperty("icon_url")
    public void setIconURL(String value) { this.iconURL = value; }

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

    @JsonProperty("profession")
    public String getProfession() { return profession; }
    @JsonProperty("profession")
    public void setProfession(String value) { this.profession = value; }

    @JsonProperty("siteId")
    public String getSiteID() { return siteID; }
    @JsonProperty("siteId")
    public void setSiteID(String value) { this.siteID = value; }

    @JsonProperty("surname")
    public String getSurname() { return surname; }
    @JsonProperty("surname")
    public void setSurname(String value) { this.surname = value; }
}
