package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class InfoBackofficeConfigurationClass {
    private Boolean enableMasterImportance;
    private ResourceTimetableType resourceTimetableType;

    @JsonProperty("enableMasterImportance")
    public Boolean getEnableMasterImportance() { return enableMasterImportance; }
    @JsonProperty("enableMasterImportance")
    public void setEnableMasterImportance(Boolean value) { this.enableMasterImportance = value; }

    @JsonProperty("resourceTimetableType")
    public ResourceTimetableType getResourceTimetableType() { return resourceTimetableType; }
    @JsonProperty("resourceTimetableType")
    public void setResourceTimetableType(ResourceTimetableType value) { this.resourceTimetableType = value; }
}
