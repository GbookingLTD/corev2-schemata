package ru.gbooking.apiv2;

import java.util.*;

/**
 * авторизационные параметры
 */
public class Cred {
    private String token;
    private String user;

    /**
     * временный token для доступа
     */
    public String getToken() { return token; }
    public void setToken(String value) { this.token = value; }

    /**
     * идентификатор профиля пользователя
     */
    public String getUser() { return user; }
    public void setUser(String value) { this.user = value; }
}
