package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class Business3 {
    private FluffyGeneralInfo generalInfo;
    private String id;
    private StickyWidgetConfiguration widgetConfiguration;

    @JsonProperty("general_info")
    public FluffyGeneralInfo getGeneralInfo() { return generalInfo; }
    @JsonProperty("general_info")
    public void setGeneralInfo(FluffyGeneralInfo value) { this.generalInfo = value; }

    @JsonProperty("id")
    public String getID() { return id; }
    @JsonProperty("id")
    public void setID(String value) { this.id = value; }

    @JsonProperty("widget_configuration")
    public StickyWidgetConfiguration getWidgetConfiguration() { return widgetConfiguration; }
    @JsonProperty("widget_configuration")
    public void setWidgetConfiguration(StickyWidgetConfiguration value) { this.widgetConfiguration = value; }
}
