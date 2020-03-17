package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class Business2 {
    private PurpleGeneralInfo generalInfo;
    private String id;
    private TentacledWidgetConfiguration widgetConfiguration;

    @JsonProperty("general_info")
    public PurpleGeneralInfo getGeneralInfo() { return generalInfo; }
    @JsonProperty("general_info")
    public void setGeneralInfo(PurpleGeneralInfo value) { this.generalInfo = value; }

    @JsonProperty("id")
    public String getID() { return id; }
    @JsonProperty("id")
    public void setID(String value) { this.id = value; }

    @JsonProperty("widget_configuration")
    public TentacledWidgetConfiguration getWidgetConfiguration() { return widgetConfiguration; }
    @JsonProperty("widget_configuration")
    public void setWidgetConfiguration(TentacledWidgetConfiguration value) { this.widgetConfiguration = value; }
}
