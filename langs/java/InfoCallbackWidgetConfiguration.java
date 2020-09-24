package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class InfoCallbackWidgetConfiguration {
    private String title1;
    private String title2;

    @JsonProperty("title1")
    public String getTitle1() { return title1; }
    @JsonProperty("title1")
    public void setTitle1(String value) { this.title1 = value; }

    @JsonProperty("title2")
    public String getTitle2() { return title2; }
    @JsonProperty("title2")
    public void setTitle2(String value) { this.title2 = value; }
}
