package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

/**
 * авторизационные параметры
 */
public class Cred {
    private String token;
    private String user;

    /**
     * временный token для доступа
     */
    @JsonProperty("token")
    public String getToken() { return token; }
    @JsonProperty("token")
    public void setToken(String value) { this.token = value; }

    /**
     * идентификатор профиля пользователя
     */
    @JsonProperty("user")
    public String getUser() { return user; }
    @JsonProperty("user")
    public void setUser(String value) { this.user = value; }
}
