package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class MagentaBusiness {
    private TentacledGeneralInfo generalInfo;
    private double id;
    private IndigoWidgetConfiguration widgetConfiguration;

    @JsonProperty("general_info")
    public TentacledGeneralInfo getGeneralInfo() { return generalInfo; }
    @JsonProperty("general_info")
    public void setGeneralInfo(TentacledGeneralInfo value) { this.generalInfo = value; }

    @JsonProperty("id")
    public double getID() { return id; }
    @JsonProperty("id")
    public void setID(double value) { this.id = value; }

    @JsonProperty("widget_configuration")
    public IndigoWidgetConfiguration getWidgetConfiguration() { return widgetConfiguration; }
    @JsonProperty("widget_configuration")
    public void setWidgetConfiguration(IndigoWidgetConfiguration value) { this.widgetConfiguration = value; }
}
