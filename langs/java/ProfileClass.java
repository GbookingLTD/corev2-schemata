package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

/**
 * Доступ имеют только пользователи с правами resource или admin
 */
public class ProfileClass {
    private AccessType accessType;
    private String email;
    private String profileID;
    private String userID;

    /**
     * тип доступа работника в систему через его учётную запись
     */
    @JsonProperty("accessType")
    public AccessType getAccessType() { return accessType; }
    @JsonProperty("accessType")
    public void setAccessType(AccessType value) { this.accessType = value; }

    /**
     * e-mail профиля работника
     */
    @JsonProperty("email")
    public String getEmail() { return email; }
    @JsonProperty("email")
    public void setEmail(String value) { this.email = value; }

    /**
     * идентификатор профиля работника уникальный во всей системе
     */
    @JsonProperty("profileID")
    public String getProfileID() { return profileID; }
    @JsonProperty("profileID")
    public void setProfileID(String value) { this.profileID = value; }

    /**
     * идентификатор работника
     */
    @JsonProperty("userID")
    public String getUserID() { return userID; }
    @JsonProperty("userID")
    public void setUserID(String value) { this.userID = value; }
}
