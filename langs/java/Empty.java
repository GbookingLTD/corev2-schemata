package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class Empty {
    private Common common;
    private Controllers controllers;
    private Models models;

    @JsonProperty("Common")
    public Common getCommon() { return common; }
    @JsonProperty("Common")
    public void setCommon(Common value) { this.common = value; }

    @JsonProperty("Controllers")
    public Controllers getControllers() { return controllers; }
    @JsonProperty("Controllers")
    public void setControllers(Controllers value) { this.controllers = value; }

    @JsonProperty("Models")
    public Models getModels() { return models; }
    @JsonProperty("Models")
    public void setModels(Models value) { this.models = value; }
}
