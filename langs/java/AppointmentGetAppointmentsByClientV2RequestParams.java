package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class AppointmentGetAppointmentsByClientV2RequestParams {
    private StickyBusiness business;
    private StickyClient client;
    private FluffyExtraFilters extraFilters;
    private FluffyFilter filter;
    private FluffyNetwork network;
    private Boolean skipBusinessCancelled;

    @JsonProperty("business")
    public StickyBusiness getBusiness() { return business; }
    @JsonProperty("business")
    public void setBusiness(StickyBusiness value) { this.business = value; }

    @JsonProperty("client")
    public StickyClient getClient() { return client; }
    @JsonProperty("client")
    public void setClient(StickyClient value) { this.client = value; }

    @JsonProperty("extraFilters")
    public FluffyExtraFilters getExtraFilters() { return extraFilters; }
    @JsonProperty("extraFilters")
    public void setExtraFilters(FluffyExtraFilters value) { this.extraFilters = value; }

    @JsonProperty("filter")
    public FluffyFilter getFilter() { return filter; }
    @JsonProperty("filter")
    public void setFilter(FluffyFilter value) { this.filter = value; }

    @JsonProperty("network")
    public FluffyNetwork getNetwork() { return network; }
    @JsonProperty("network")
    public void setNetwork(FluffyNetwork value) { this.network = value; }

    @JsonProperty("skipBusinessCancelled")
    public Boolean getSkipBusinessCancelled() { return skipBusinessCancelled; }
    @JsonProperty("skipBusinessCancelled")
    public void setSkipBusinessCancelled(Boolean value) { this.skipBusinessCancelled = value; }
}
