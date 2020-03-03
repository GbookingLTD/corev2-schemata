package ru.gbooking.apiv2;

import java.util.*;

public class BusinessTaxonomyProduct {
    private String extraID;
    private String id;
    private boolean required;

    /**
     * Дополнительный ID товара
     */
    public String getExtraID() { return extraID; }
    public void setExtraID(String value) { this.extraID = value; }

    /**
     * ID товара
     */
    public String getID() { return id; }
    public void setID(String value) { this.id = value; }

    /**
     * Является ли обязательным при выполнении данной услуги
     */
    public boolean getRequired() { return required; }
    public void setRequired(boolean value) { this.required = value; }
}
