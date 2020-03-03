package ru.gbooking.apiv2;

import java.util.*;

public class AdditionalFieldsClass {
    private String name;
    private boolean requiredField;
    private String shortName;
    private AdditionalFieldsType type;
    private String value;

    public String getName() { return name; }
    public void setName(String value) { this.name = value; }

    public boolean getRequiredField() { return requiredField; }
    public void setRequiredField(boolean value) { this.requiredField = value; }

    public String getShortName() { return shortName; }
    public void setShortName(String value) { this.shortName = value; }

    public AdditionalFieldsType getType() { return type; }
    public void setType(AdditionalFieldsType value) { this.type = value; }

    public String getValue() { return value; }
    public void setValue(String value) { this.value = value; }
}
