package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class AppointmentGetAppointmentByFilterRequestParams {
    private FluffyBusiness business;
    private ExtraFilters extraFilters;
    private Filter filter;
    private ParamsNetwork network;
    private double page;
    private double pageSize;
    private Boolean skipBusinessCancelled;

    @JsonProperty("business")
    public FluffyBusiness getBusiness() { return business; }
    @JsonProperty("business")
    public void setBusiness(FluffyBusiness value) { this.business = value; }

    @JsonProperty("extraFilters")
    public ExtraFilters getExtraFilters() { return extraFilters; }
    @JsonProperty("extraFilters")
    public void setExtraFilters(ExtraFilters value) { this.extraFilters = value; }

    @JsonProperty("filter")
    public Filter getFilter() { return filter; }
    @JsonProperty("filter")
    public void setFilter(Filter value) { this.filter = value; }

    @JsonProperty("network")
    public ParamsNetwork getNetwork() { return network; }
    @JsonProperty("network")
    public void setNetwork(ParamsNetwork value) { this.network = value; }

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
