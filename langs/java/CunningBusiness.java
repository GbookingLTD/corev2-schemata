package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class CunningBusiness {
    private FluffyGeneralInfo generalInfo;
    private double id;
    private StickyWidgetConfiguration widgetConfiguration;

    @JsonProperty("general_info")
    public FluffyGeneralInfo getGeneralInfo() { return generalInfo; }
    @JsonProperty("general_info")
    public void setGeneralInfo(FluffyGeneralInfo value) { this.generalInfo = value; }

    @JsonProperty("id")
    public double getID() { return id; }
    @JsonProperty("id")
    public void setID(double value) { this.id = value; }

    @JsonProperty("widget_configuration")
    public StickyWidgetConfiguration getWidgetConfiguration() { return widgetConfiguration; }
    @JsonProperty("widget_configuration")
    public void setWidgetConfiguration(StickyWidgetConfiguration value) { this.widgetConfiguration = value; }
}
