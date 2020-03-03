package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class ChiangMaiGoose {
    private TypeElement type;
    private boolean chiangMaiGooseDefault;

    @JsonProperty("type")
    public TypeElement getType() { return type; }
    @JsonProperty("type")
    public void setType(TypeElement value) { this.type = value; }

    @JsonProperty("default")
    public boolean getChiangMaiGooseDefault() { return chiangMaiGooseDefault; }
    @JsonProperty("default")
    public void setChiangMaiGooseDefault(boolean value) { this.chiangMaiGooseDefault = value; }
}
