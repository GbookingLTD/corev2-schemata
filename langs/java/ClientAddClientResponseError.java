package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;
import java.util.Map;

/**
 * объект, содержащий информацию об ошибке
 *
 * Код ошибки авторизации
 */
public class ClientAddClientResponseError {
    private double code;
    private Data data;
    private String message;

    /**
     * код ошибки
     *
     * код ошибки создания клиента
     */
    @JsonProperty("code")
    public double getCode() { return code; }
    @JsonProperty("code")
    public void setCode(double value) { this.code = value; }

    /**
     * дополнительные данные об ошибке
     */
    @JsonProperty("data")
    public Data getData() { return data; }
    @JsonProperty("data")
    public void setData(Data value) { this.data = value; }

    /**
     * текстовая информация об ошибке
     */
    @JsonProperty("message")
    public String getMessage() { return message; }
    @JsonProperty("message")
    public void setMessage(String value) { this.message = value; }
}
