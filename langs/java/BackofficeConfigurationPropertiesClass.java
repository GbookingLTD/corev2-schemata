package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class BackofficeConfigurationPropertiesClass {
    private Repeats resourceTimetableType;
    private ChiangMaiGoose enableMasterImportance;

    @JsonProperty("resourceTimetableType")
    public Repeats getResourceTimetableType() { return resourceTimetableType; }
    @JsonProperty("resourceTimetableType")
    public void setResourceTimetableType(Repeats value) { this.resourceTimetableType = value; }

    @JsonProperty("enableMasterImportance")
    public ChiangMaiGoose getEnableMasterImportance() { return enableMasterImportance; }
    @JsonProperty("enableMasterImportance")
    public void setEnableMasterImportance(ChiangMaiGoose value) { this.enableMasterImportance = value; }
}
