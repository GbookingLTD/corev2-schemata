package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class FluffyTaxonomy {
    private String id;

    /**
     * идентификатор услуги, если передано - возвращает все бизнесы нетворка с такой услугой
     */
    @JsonProperty("id")
    public String getID() { return id; }
    @JsonProperty("id")
    public void setID(String value) { this.id = value; }
}
