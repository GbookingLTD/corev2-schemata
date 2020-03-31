package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class BraggadociousBusiness {
    private FluffyGeneralInfo generalInfo;
    private String id;
    private FluffyWidgetConfiguration widgetConfiguration;

    @JsonProperty("general_info")
    public FluffyGeneralInfo getGeneralInfo() { return generalInfo; }
    @JsonProperty("general_info")
    public void setGeneralInfo(FluffyGeneralInfo value) { this.generalInfo = value; }

    @JsonProperty("id")
    public String getID() { return id; }
    @JsonProperty("id")
    public void setID(String value) { this.id = value; }

    @JsonProperty("widget_configuration")
    public FluffyWidgetConfiguration getWidgetConfiguration() { return widgetConfiguration; }
    @JsonProperty("widget_configuration")
    public void setWidgetConfiguration(FluffyWidgetConfiguration value) { this.widgetConfiguration = value; }
}
