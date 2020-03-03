package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class ResourceTaxonomyLevelProperties {
    private HammerfestPonies level;
    private HammerfestPonies id;

    @JsonProperty("level")
    public HammerfestPonies getLevel() { return level; }
    @JsonProperty("level")
    public void setLevel(HammerfestPonies value) { this.level = value; }

    @JsonProperty("id")
    public HammerfestPonies getID() { return id; }
    @JsonProperty("id")
    public void setID(HammerfestPonies value) { this.id = value; }
}
