package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class Review {
    private BusinessClass business;
    private BusinessClass taxonomy;
    private BusinessClass worker;

    @JsonProperty("business")
    public BusinessClass getBusiness() { return business; }
    @JsonProperty("business")
    public void setBusiness(BusinessClass value) { this.business = value; }

    @JsonProperty("taxonomy")
    public BusinessClass getTaxonomy() { return taxonomy; }
    @JsonProperty("taxonomy")
    public void setTaxonomy(BusinessClass value) { this.taxonomy = value; }

    @JsonProperty("worker")
    public BusinessClass getWorker() { return worker; }
    @JsonProperty("worker")
    public void setWorker(BusinessClass value) { this.worker = value; }
}
