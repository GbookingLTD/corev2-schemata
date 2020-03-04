package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class BusinessTaxonomyProduct {
    private String extraID;
    private String id;
    private boolean required;

    /**
     * Дополнительный ID товара
     */
    @JsonProperty("extraID")
    public String getExtraID() { return extraID; }
    @JsonProperty("extraID")
    public void setExtraID(String value) { this.extraID = value; }

    /**
     * ID товара
     */
    @JsonProperty("id")
    public String getID() { return id; }
    @JsonProperty("id")
    public void setID(String value) { this.id = value; }

    /**
     * Является ли обязательным при выполнении данной услуги
     */
    @JsonProperty("required")
    public boolean getRequired() { return required; }
    @JsonProperty("required")
    public void setRequired(boolean value) { this.required = value; }
}
