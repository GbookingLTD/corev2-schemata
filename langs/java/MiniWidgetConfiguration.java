package ru.gbooking.apiv2;

import java.util.*;

public class MiniWidgetConfiguration {
    private List<Field> fields;
    private String title1;
    private String title2;

    public List<Field> getFields() { return fields; }
    public void setFields(List<Field> value) { this.fields = value; }

    public String getTitle1() { return title1; }
    public void setTitle1(String value) { this.title1 = value; }

    public String getTitle2() { return title2; }
    public void setTitle2(String value) { this.title2 = value; }
}
