package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class FluffyResource {
    private String id;

    /**
     * идентификатор работника, если передано - возвращает все бизнесы нетворка где есть
     * работник с таким ключем
     */
    @JsonProperty("id")
    public String getID() { return id; }
    @JsonProperty("id")
    public void setID(String value) { this.id = value; }
}
