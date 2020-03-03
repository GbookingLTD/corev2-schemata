package ru.gbooking.apiv2;

import java.util.*;

public class TaxonomiesComplex {
    private String name;
    private List<String> taxonomies;

    public String getName() { return name; }
    public void setName(String value) { this.name = value; }

    public List<String> getTaxonomies() { return taxonomies; }
    public void setTaxonomies(List<String> value) { this.taxonomies = value; }
}
