package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class ParamsProfile {
    private String id;

    /**
     * идентификатор профиля пользователя
     */
    @JsonProperty("id")
    public String getID() { return id; }
    @JsonProperty("id")
    public void setID(String value) { this.id = value; }
}
