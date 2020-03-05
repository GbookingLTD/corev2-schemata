package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class PurpleResourceFilter {
    private AmbitiousBusiness business;
    private String resource;

    @JsonProperty("business")
    public AmbitiousBusiness getBusiness() { return business; }
    @JsonProperty("business")
    public void setBusiness(AmbitiousBusiness value) { this.business = value; }

    /**
     * идентификатор ресурса
     */
    @JsonProperty("resource")
    public String getResource() { return resource; }
    @JsonProperty("resource")
    public void setResource(String value) { this.resource = value; }
}
