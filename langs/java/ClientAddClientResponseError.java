package ru.gbooking.apiv2;

import java.util.*;

/**
 * объект, содержащий информацию об ошибке
 *
 * Список кодов ошибки авторизации
 */
public class ClientAddClientResponseError {
    private double code;
    private String data;
    private String message;

    /**
     * код ошибки
     *
     * код ошибки создания клиента
     */
    public double getCode() { return code; }
    public void setCode(double value) { this.code = value; }

    /**
     * дополнительные данные об ошибке
     */
    public String getData() { return data; }
    public void setData(String value) { this.data = value; }

    /**
     * текстовая информация об ошибке
     */
    public String getMessage() { return message; }
    public void setMessage(String value) { this.message = value; }
}
