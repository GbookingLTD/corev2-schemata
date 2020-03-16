package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class AppointmentReserve {
    private IndigoAppointment appointment;
    private FluffyBusiness business;
    private String originBusinessID;
    private ResourceClass resource;
    private String source;
    private ParamsTaxonomy taxonomy;

    @JsonProperty("appointment")
    public IndigoAppointment getAppointment() { return appointment; }
    @JsonProperty("appointment")
    public void setAppointment(IndigoAppointment value) { this.appointment = value; }

    @JsonProperty("business")
    public FluffyBusiness getBusiness() { return business; }
    @JsonProperty("business")
    public void setBusiness(FluffyBusiness value) { this.business = value; }

    @JsonProperty("originBusinessID")
    public String getOriginBusinessID() { return originBusinessID; }
    @JsonProperty("originBusinessID")
    public void setOriginBusinessID(String value) { this.originBusinessID = value; }

    @JsonProperty("resource")
    public ResourceClass getResource() { return resource; }
    @JsonProperty("resource")
    public void setResource(ResourceClass value) { this.resource = value; }

    @JsonProperty("source")
    public String getSource() { return source; }
    @JsonProperty("source")
    public void setSource(String value) { this.source = value; }

    @JsonProperty("taxonomy")
    public ParamsTaxonomy getTaxonomy() { return taxonomy; }
    @JsonProperty("taxonomy")
    public void setTaxonomy(ParamsTaxonomy value) { this.taxonomy = value; }
}
