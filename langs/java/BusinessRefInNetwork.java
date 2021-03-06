package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;
import java.util.List;

/**
 * указатель на бизнес в сети
 */
public class BusinessRefInNetwork {
    private String id;
    private String businessID;
    private InfoClass info;
    private boolean isMapBusiness;
    private Double order;
    private List<String> virtualTaxonomies;

    @JsonProperty("_id")
    public String getID() { return id; }
    @JsonProperty("_id")
    public void setID(String value) { this.id = value; }

    @JsonProperty("businessID")
    public String getBusinessID() { return businessID; }
    @JsonProperty("businessID")
    public void setBusinessID(String value) { this.businessID = value; }

    @JsonProperty("info")
    public InfoClass getInfo() { return info; }
    @JsonProperty("info")
    public void setInfo(InfoClass value) { this.info = value; }

    @JsonProperty("isMapBusiness")
    public boolean getIsMapBusiness() { return isMapBusiness; }
    @JsonProperty("isMapBusiness")
    public void setIsMapBusiness(boolean value) { this.isMapBusiness = value; }

    @JsonProperty("order")
    public Double getOrder() { return order; }
    @JsonProperty("order")
    public void setOrder(Double value) { this.order = value; }

    @JsonProperty("virtualTaxonomies")
    public List<String> getVirtualTaxonomies() { return virtualTaxonomies; }
    @JsonProperty("virtualTaxonomies")
    public void setVirtualTaxonomies(List<String> value) { this.virtualTaxonomies = value; }
}
