package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class ResourceTaxonomyChildren {
    private boolean children;
    private String taxonomyID;

    /**
     * true - детская услуга; false - взрослая услуга
     */
    @JsonProperty("children")
    public boolean getChildren() { return children; }
    @JsonProperty("children")
    public void setChildren(boolean value) { this.children = value; }

    /**
     * идентификатор услуги, для которой установлено свойство
     */
    @JsonProperty("taxonomyID")
    public String getTaxonomyID() { return taxonomyID; }
    @JsonProperty("taxonomyID")
    public void setTaxonomyID(String value) { this.taxonomyID = value; }
}
