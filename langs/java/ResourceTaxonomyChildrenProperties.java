package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class ResourceTaxonomyChildrenProperties {
    private HammerfestPonies taxonomyID;
    private HammerfestPonies children;

    @JsonProperty("taxonomyID")
    public HammerfestPonies getTaxonomyID() { return taxonomyID; }
    @JsonProperty("taxonomyID")
    public void setTaxonomyID(HammerfestPonies value) { this.taxonomyID = value; }

    @JsonProperty("children")
    public HammerfestPonies getChildren() { return children; }
    @JsonProperty("children")
    public void setChildren(HammerfestPonies value) { this.children = value; }
}
