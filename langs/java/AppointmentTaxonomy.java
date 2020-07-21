package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class AppointmentTaxonomy {
    private String alias;
    private String confirmationAlert;
    private String extraDescription;
    private String extraID;
    private String id;
    private String siteID;

    @JsonProperty("alias")
    public String getAlias() { return alias; }
    @JsonProperty("alias")
    public void setAlias(String value) { this.alias = value; }

    @JsonProperty("confirmationAlert")
    public String getConfirmationAlert() { return confirmationAlert; }
    @JsonProperty("confirmationAlert")
    public void setConfirmationAlert(String value) { this.confirmationAlert = value; }

    @JsonProperty("extraDescription")
    public String getExtraDescription() { return extraDescription; }
    @JsonProperty("extraDescription")
    public void setExtraDescription(String value) { this.extraDescription = value; }

    @JsonProperty("extraId")
    public String getExtraID() { return extraID; }
    @JsonProperty("extraId")
    public void setExtraID(String value) { this.extraID = value; }

    @JsonProperty("id")
    public String getID() { return id; }
    @JsonProperty("id")
    public void setID(String value) { this.id = value; }

    @JsonProperty("siteId")
    public String getSiteID() { return siteID; }
    @JsonProperty("siteId")
    public void setSiteID(String value) { this.siteID = value; }
}
