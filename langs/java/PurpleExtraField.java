package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class PurpleExtraField {
    private String fieldID;
    private String fieldName;
    private FluffyValue value;

    @JsonProperty("fieldID")
    public String getFieldID() { return fieldID; }
    @JsonProperty("fieldID")
    public void setFieldID(String value) { this.fieldID = value; }

    @JsonProperty("fieldName")
    public String getFieldName() { return fieldName; }
    @JsonProperty("fieldName")
    public void setFieldName(String value) { this.fieldName = value; }

    @JsonProperty("value")
    public FluffyValue getValue() { return value; }
    @JsonProperty("value")
    public void setValue(FluffyValue value) { this.value = value; }
}
