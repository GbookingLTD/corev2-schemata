package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

/**
 * Данные для телемед конференции
 */
public class AppointmentTelemedData {
    private String id;
    private String joinURL;
    private String password;
    private String shortJoinURL;
    private String shortStartURL;
    private String startURL;

    @JsonProperty("id")
    public String getID() { return id; }
    @JsonProperty("id")
    public void setID(String value) { this.id = value; }

    @JsonProperty("joinUrl")
    public String getJoinURL() { return joinURL; }
    @JsonProperty("joinUrl")
    public void setJoinURL(String value) { this.joinURL = value; }

    @JsonProperty("password")
    public String getPassword() { return password; }
    @JsonProperty("password")
    public void setPassword(String value) { this.password = value; }

    @JsonProperty("shortJoinUrl")
    public String getShortJoinURL() { return shortJoinURL; }
    @JsonProperty("shortJoinUrl")
    public void setShortJoinURL(String value) { this.shortJoinURL = value; }

    @JsonProperty("shortStartUrl")
    public String getShortStartURL() { return shortStartURL; }
    @JsonProperty("shortStartUrl")
    public void setShortStartURL(String value) { this.shortStartURL = value; }

    @JsonProperty("startUrl")
    public String getStartURL() { return startURL; }
    @JsonProperty("startUrl")
    public void setStartURL(String value) { this.startURL = value; }
}
