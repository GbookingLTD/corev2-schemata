package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class AppointmentGetAppointmentByFilterRequestParams {
    private FluffyBusiness business;
    private PurpleExtraFilters extraFilters;
    private PurpleFilter filter;
    private PurpleNetwork network;
    private double page;
    private double pageSize;
    private Boolean skipBusinessCancelled;

    @JsonProperty("business")
    public FluffyBusiness getBusiness() { return business; }
    @JsonProperty("business")
    public void setBusiness(FluffyBusiness value) { this.business = value; }

    @JsonProperty("extraFilters")
    public PurpleExtraFilters getExtraFilters() { return extraFilters; }
    @JsonProperty("extraFilters")
    public void setExtraFilters(PurpleExtraFilters value) { this.extraFilters = value; }

    @JsonProperty("filter")
    public PurpleFilter getFilter() { return filter; }
    @JsonProperty("filter")
    public void setFilter(PurpleFilter value) { this.filter = value; }

    @JsonProperty("network")
    public PurpleNetwork getNetwork() { return network; }
    @JsonProperty("network")
    public void setNetwork(PurpleNetwork value) { this.network = value; }

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
