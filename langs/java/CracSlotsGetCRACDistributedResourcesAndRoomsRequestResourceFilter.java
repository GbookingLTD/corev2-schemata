package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class CracSlotsGetCRACDistributedResourcesAndRoomsRequestResourceFilter {
    private ResourceBusiness business;
    private String resource;

    @JsonProperty("business")
    public ResourceBusiness getBusiness() { return business; }
    @JsonProperty("business")
    public void setBusiness(ResourceBusiness value) { this.business = value; }

    /**
     * идентификатор ресурса
     */
    @JsonProperty("resource")
    public String getResource() { return resource; }
    @JsonProperty("resource")
    public void setResource(String value) { this.resource = value; }
}
