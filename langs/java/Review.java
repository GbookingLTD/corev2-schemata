package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class Review {
    private WorkerClass business;
    private WorkerClass taxonomy;
    private WorkerClass worker;

    @JsonProperty("business")
    public WorkerClass getBusiness() { return business; }
    @JsonProperty("business")
    public void setBusiness(WorkerClass value) { this.business = value; }

    @JsonProperty("taxonomy")
    public WorkerClass getTaxonomy() { return taxonomy; }
    @JsonProperty("taxonomy")
    public void setTaxonomy(WorkerClass value) { this.taxonomy = value; }

    @JsonProperty("worker")
    public WorkerClass getWorker() { return worker; }
    @JsonProperty("worker")
    public void setWorker(WorkerClass value) { this.worker = value; }
}
