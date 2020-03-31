package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class MischievousBusiness {
    private PurpleGeneralInfo generalInfo;
    private String id;
    private PurpleWidgetConfiguration widgetConfiguration;

    @JsonProperty("general_info")
    public PurpleGeneralInfo getGeneralInfo() { return generalInfo; }
    @JsonProperty("general_info")
    public void setGeneralInfo(PurpleGeneralInfo value) { this.generalInfo = value; }

    @JsonProperty("id")
    public String getID() { return id; }
    @JsonProperty("id")
    public void setID(String value) { this.id = value; }

    @JsonProperty("widget_configuration")
    public PurpleWidgetConfiguration getWidgetConfiguration() { return widgetConfiguration; }
    @JsonProperty("widget_configuration")
    public void setWidgetConfiguration(PurpleWidgetConfiguration value) { this.widgetConfiguration = value; }
}
