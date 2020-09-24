package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class InfoTaxonomiesComplex {
    private String name;
    private List<String> taxonomies;

    @JsonProperty("name")
    public String getName() { return name; }
    @JsonProperty("name")
    public void setName(String value) { this.name = value; }

    @JsonProperty("taxonomies")
    public List<String> getTaxonomies() { return taxonomies; }
    @JsonProperty("taxonomies")
    public void setTaxonomies(List<String> value) { this.taxonomies = value; }
}
