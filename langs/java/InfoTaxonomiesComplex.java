package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;
import java.util.List;

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
