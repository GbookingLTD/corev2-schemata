package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class AdditionalFields {
    private String name;
    private boolean requiredField;
    private String shortName;
    private AdditionalFieldType type;
    private String value;

    @JsonProperty("name")
    public String getName() { return name; }
    @JsonProperty("name")
    public void setName(String value) { this.name = value; }

    @JsonProperty("requiredField")
    public boolean getRequiredField() { return requiredField; }
    @JsonProperty("requiredField")
    public void setRequiredField(boolean value) { this.requiredField = value; }

    @JsonProperty("shortName")
    public String getShortName() { return shortName; }
    @JsonProperty("shortName")
    public void setShortName(String value) { this.shortName = value; }

    @JsonProperty("type")
    public AdditionalFieldType getType() { return type; }
    @JsonProperty("type")
    public void setType(AdditionalFieldType value) { this.type = value; }

    @JsonProperty("value")
    public String getValue() { return value; }
    @JsonProperty("value")
    public void setValue(String value) { this.value = value; }
}
