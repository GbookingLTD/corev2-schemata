package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;
import java.util.List;
import java.util.Map;

public class ExtraField {
    private String fieldID;
    private String fieldName;
    private PurpleValue value;

    @JsonProperty("fieldID")
    public String getFieldID() { return fieldID; }
    @JsonProperty("fieldID")
    public void setFieldID(String value) { this.fieldID = value; }

    @JsonProperty("fieldName")
    public String getFieldName() { return fieldName; }
    @JsonProperty("fieldName")
    public void setFieldName(String value) { this.fieldName = value; }

    @JsonProperty("value")
    public PurpleValue getValue() { return value; }
    @JsonProperty("value")
    public void setValue(PurpleValue value) { this.value = value; }
}
