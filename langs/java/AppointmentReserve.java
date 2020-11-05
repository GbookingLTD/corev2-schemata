package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class AppointmentReserve {
    private AmbitiousAppointment appointment;
    private CunningBusiness business;
    private String originBusinessID;
    private PurpleResource resource;
    private String source;
    private PurpleTaxonomy taxonomy;

    @JsonProperty("appointment")
    public AmbitiousAppointment getAppointment() { return appointment; }
    @JsonProperty("appointment")
    public void setAppointment(AmbitiousAppointment value) { this.appointment = value; }

    @JsonProperty("business")
    public CunningBusiness getBusiness() { return business; }
    @JsonProperty("business")
    public void setBusiness(CunningBusiness value) { this.business = value; }

    @JsonProperty("originBusinessID")
    public String getOriginBusinessID() { return originBusinessID; }
    @JsonProperty("originBusinessID")
    public void setOriginBusinessID(String value) { this.originBusinessID = value; }

    @JsonProperty("resource")
    public PurpleResource getResource() { return resource; }
    @JsonProperty("resource")
    public void setResource(PurpleResource value) { this.resource = value; }

    @JsonProperty("source")
    public String getSource() { return source; }
    @JsonProperty("source")
    public void setSource(String value) { this.source = value; }

    @JsonProperty("taxonomy")
    public PurpleTaxonomy getTaxonomy() { return taxonomy; }
    @JsonProperty("taxonomy")
    public void setTaxonomy(PurpleTaxonomy value) { this.taxonomy = value; }
}
