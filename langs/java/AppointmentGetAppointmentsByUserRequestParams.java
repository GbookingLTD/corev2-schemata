package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class AppointmentGetAppointmentsByUserRequestParams {
    private IndigoBusiness business;
    private TentacledExtraFilters extraFilters;
    private TentacledFilter filter;
    private TentacledNetwork network;
    private double page;
    private double pageSize;
    private Boolean skipBusinessCancelled;

    @JsonProperty("business")
    public IndigoBusiness getBusiness() { return business; }
    @JsonProperty("business")
    public void setBusiness(IndigoBusiness value) { this.business = value; }

    @JsonProperty("extraFilters")
    public TentacledExtraFilters getExtraFilters() { return extraFilters; }
    @JsonProperty("extraFilters")
    public void setExtraFilters(TentacledExtraFilters value) { this.extraFilters = value; }

    @JsonProperty("filter")
    public TentacledFilter getFilter() { return filter; }
    @JsonProperty("filter")
    public void setFilter(TentacledFilter value) { this.filter = value; }

    @JsonProperty("network")
    public TentacledNetwork getNetwork() { return network; }
    @JsonProperty("network")
    public void setNetwork(TentacledNetwork value) { this.network = value; }

    @JsonProperty("page")
    public double getPage() { return page; }
    @JsonProperty("page")
    public void setPage(double value) { this.page = value; }

    @JsonProperty("pageSize")
    public double getPageSize() { return pageSize; }
    @JsonProperty("pageSize")
    public void setPageSize(double value) { this.pageSize = value; }

    @JsonProperty("skipBusinessCancelled")
    public Boolean getSkipBusinessCancelled() { return skipBusinessCancelled; }
    @JsonProperty("skipBusinessCancelled")
    public void setSkipBusinessCancelled(Boolean value) { this.skipBusinessCancelled = value; }
}
