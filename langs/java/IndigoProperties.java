package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class IndigoProperties {
    private BeijingPigeon name;
    private DefaultFilteredWorkers taxonomies;

    @JsonProperty("name")
    public BeijingPigeon getName() { return name; }
    @JsonProperty("name")
    public void setName(BeijingPigeon value) { this.name = value; }

    @JsonProperty("taxonomies")
    public DefaultFilteredWorkers getTaxonomies() { return taxonomies; }
    @JsonProperty("taxonomies")
    public void setTaxonomies(DefaultFilteredWorkers value) { this.taxonomies = value; }
}
