package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class FromSMS {
    private List<TypeElement> type;
    private boolean fromSMSDefault;

    @JsonProperty("type")
    public List<TypeElement> getType() { return type; }
    @JsonProperty("type")
    public void setType(List<TypeElement> value) { this.type = value; }

    @JsonProperty("default")
    public boolean getFromSMSDefault() { return fromSMSDefault; }
    @JsonProperty("default")
    public void setFromSMSDefault(boolean value) { this.fromSMSDefault = value; }
}
