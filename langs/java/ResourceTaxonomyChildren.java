package ru.gbooking.apiv2;

import java.util.*;

public class ResourceTaxonomyChildren {
    private boolean children;
    private String taxonomyID;

    /**
     * true - детская услуга; false - взрослая услуга
     */
    public boolean getChildren() { return children; }
    public void setChildren(boolean value) { this.children = value; }

    /**
     * идентификатор услуги, для которой установлено свойство
     */
    public String getTaxonomyID() { return taxonomyID; }
    public void setTaxonomyID(String value) { this.taxonomyID = value; }
}
