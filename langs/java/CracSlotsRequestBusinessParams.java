package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class CracSlotsRequestBusinessParams {
    private GeneralInfo generalInfo;
    private String id;
    private PurpleWidgetConfiguration widgetConfiguration;

    @JsonProperty("general_info")
    public GeneralInfo getGeneralInfo() { return generalInfo; }
    @JsonProperty("general_info")
    public void setGeneralInfo(GeneralInfo value) { this.generalInfo = value; }

    @JsonProperty("id")
    public String getID() { return id; }
    @JsonProperty("id")
    public void setID(String value) { this.id = value; }

    @JsonProperty("widget_configuration")
    public PurpleWidgetConfiguration getWidgetConfiguration() { return widgetConfiguration; }
    @JsonProperty("widget_configuration")
    public void setWidgetConfiguration(PurpleWidgetConfiguration value) { this.widgetConfiguration = value; }
}
