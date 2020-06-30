package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

/**
 * Код ошибки авторизации
 */
public class AuthErrorCodesClass {
    private double code;

    @JsonProperty("code")
    public double getCode() { return code; }
    @JsonProperty("code")
    public void setCode(double value) { this.code = value; }
}
