package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class DefaultWorkerImgURL {
    private TypeElement type;
    private String defaultWorkerImgURLDefault;

    @JsonProperty("type")
    public TypeElement getType() { return type; }
    @JsonProperty("type")
    public void setType(TypeElement value) { this.type = value; }

    @JsonProperty("default")
    public String getDefaultWorkerImgURLDefault() { return defaultWorkerImgURLDefault; }
    @JsonProperty("default")
    public void setDefaultWorkerImgURLDefault(String value) { this.defaultWorkerImgURLDefault = value; }
}
