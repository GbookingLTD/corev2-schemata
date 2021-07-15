package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class InfoBackofficeConfigurationClass {
    private BackofficeConfigurationClientCancellationRestriction clientCancellationRestriction;
    private Boolean enableExtendedPhone;
    private Boolean enableMasterImportance;
    private Boolean enablePhoneNationalMode;
    private ResourceTimetableType resourceTimetableType;

    @JsonProperty("clientCancellationRestriction")
    public BackofficeConfigurationClientCancellationRestriction getClientCancellationRestriction() { return clientCancellationRestriction; }
    @JsonProperty("clientCancellationRestriction")
    public void setClientCancellationRestriction(BackofficeConfigurationClientCancellationRestriction value) { this.clientCancellationRestriction = value; }

    @JsonProperty("enableExtendedPhone")
    public Boolean getEnableExtendedPhone() { return enableExtendedPhone; }
    @JsonProperty("enableExtendedPhone")
    public void setEnableExtendedPhone(Boolean value) { this.enableExtendedPhone = value; }

    @JsonProperty("enableMasterImportance")
    public Boolean getEnableMasterImportance() { return enableMasterImportance; }
    @JsonProperty("enableMasterImportance")
    public void setEnableMasterImportance(Boolean value) { this.enableMasterImportance = value; }

    @JsonProperty("enablePhoneNationalMode")
    public Boolean getEnablePhoneNationalMode() { return enablePhoneNationalMode; }
    @JsonProperty("enablePhoneNationalMode")
    public void setEnablePhoneNationalMode(Boolean value) { this.enablePhoneNationalMode = value; }

    @JsonProperty("resourceTimetableType")
    public ResourceTimetableType getResourceTimetableType() { return resourceTimetableType; }
    @JsonProperty("resourceTimetableType")
    public void setResourceTimetableType(ResourceTimetableType value) { this.resourceTimetableType = value; }
}
