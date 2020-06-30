package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class AppointmentGetAppointmentByShowcaseRequestParams {
    private TentacledBusiness business;
    private ParamsCreated created;
    private double page;
    private double pageSize;
    private String source;

    @JsonProperty("business")
    public TentacledBusiness getBusiness() { return business; }
    @JsonProperty("business")
    public void setBusiness(TentacledBusiness value) { this.business = value; }

    @JsonProperty("created")
    public ParamsCreated getCreated() { return created; }
    @JsonProperty("created")
    public void setCreated(ParamsCreated value) { this.created = value; }

    @JsonProperty("page")
    public double getPage() { return page; }
    @JsonProperty("page")
    public void setPage(double value) { this.page = value; }

    @JsonProperty("pageSize")
    public double getPageSize() { return pageSize; }
    @JsonProperty("pageSize")
    public void setPageSize(double value) { this.pageSize = value; }

    @JsonProperty("source")
    public String getSource() { return source; }
    @JsonProperty("source")
    public void setSource(String value) { this.source = value; }
}
