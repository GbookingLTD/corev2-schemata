package ru.gbooking.apiv2;

import java.util.*;

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
    public AccessType getAccessType() { return accessType; }
    public void setAccessType(AccessType value) { this.accessType = value; }

    /**
     * e-mail профиля работника
     */
    public String getEmail() { return email; }
    public void setEmail(String value) { this.email = value; }

    /**
     * идентификатор профиля работника уникальный во всей системе
     */
    public String getProfileID() { return profileID; }
    public void setProfileID(String value) { this.profileID = value; }

    /**
     * идентификатор работника
     */
    public String getUserID() { return userID; }
    public void setUserID(String value) { this.userID = value; }
}
