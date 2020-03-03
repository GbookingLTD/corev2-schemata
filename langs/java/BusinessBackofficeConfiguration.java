package ru.gbooking.apiv2;

import java.util.*;

public class BusinessBackofficeConfiguration {
    private Boolean enableMasterImportance;
    private ResourceTimetableType resourceTimetableType;

    public Boolean getEnableMasterImportance() { return enableMasterImportance; }
    public void setEnableMasterImportance(Boolean value) { this.enableMasterImportance = value; }

    public ResourceTimetableType getResourceTimetableType() { return resourceTimetableType; }
    public void setResourceTimetableType(ResourceTimetableType value) { this.resourceTimetableType = value; }
}
