package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class PurpleWidgetConfiguration {
    private String cracServer;
    private Double displaySlotSize;
    private Boolean hideGraySlots;

    @JsonProperty("cracServer")
    public String getCracServer() { return cracServer; }
    @JsonProperty("cracServer")
    public void setCracServer(String value) { this.cracServer = value; }

    @JsonProperty("displaySlotSize")
    public Double getDisplaySlotSize() { return displaySlotSize; }
    @JsonProperty("displaySlotSize")
    public void setDisplaySlotSize(Double value) { this.displaySlotSize = value; }

    @JsonProperty("hideGraySlots")
    public Boolean getHideGraySlots() { return hideGraySlots; }
    @JsonProperty("hideGraySlots")
    public void setHideGraySlots(Boolean value) { this.hideGraySlots = value; }
}
