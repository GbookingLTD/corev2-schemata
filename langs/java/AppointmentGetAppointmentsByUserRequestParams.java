package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class AppointmentGetAppointmentsByUserRequestParams {
    private HilariousBusiness business;
    private TentacledExtraFilters extraFilters;
    private Boolean fillBusinessData;
    private TentacledFilter filter;
    private TentacledNetwork network;
    private double page;
    private double pageSize;
    private Boolean skipBusinessCancelled;

    @JsonProperty("business")
    public HilariousBusiness getBusiness() { return business; }
    @JsonProperty("business")
    public void setBusiness(HilariousBusiness value) { this.business = value; }

    @JsonProperty("extraFilters")
    public TentacledExtraFilters getExtraFilters() { return extraFilters; }
    @JsonProperty("extraFilters")
    public void setExtraFilters(TentacledExtraFilters value) { this.extraFilters = value; }

    @JsonProperty("fill_business_data")
    public Boolean getFillBusinessData() { return fillBusinessData; }
    @JsonProperty("fill_business_data")
    public void setFillBusinessData(Boolean value) { this.fillBusinessData = value; }

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
