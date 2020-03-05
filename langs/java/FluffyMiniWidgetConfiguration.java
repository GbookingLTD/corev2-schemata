package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class FluffyMiniWidgetConfiguration {
    private List<Field> fields;
    private String title1;
    private String title2;

    @JsonProperty("fields")
    public List<Field> getFields() { return fields; }
    @JsonProperty("fields")
    public void setFields(List<Field> value) { this.fields = value; }

    @JsonProperty("title1")
    public String getTitle1() { return title1; }
    @JsonProperty("title1")
    public void setTitle1(String value) { this.title1 = value; }

    @JsonProperty("title2")
    public String getTitle2() { return title2; }
    @JsonProperty("title2")
    public void setTitle2(String value) { this.title2 = value; }
}
