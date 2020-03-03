package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class PurpleProperties {
    private TrapaniSnowLeopard slotDuration;
    private ChiangMaiGoose isAnyAvailable;
    private BeijingPigeon taxonomyID;
    private BeijingPigeon order;

    @JsonProperty("slotDuration")
    public TrapaniSnowLeopard getSlotDuration() { return slotDuration; }
    @JsonProperty("slotDuration")
    public void setSlotDuration(TrapaniSnowLeopard value) { this.slotDuration = value; }

    @JsonProperty("isAnyAvailable")
    public ChiangMaiGoose getIsAnyAvailable() { return isAnyAvailable; }
    @JsonProperty("isAnyAvailable")
    public void setIsAnyAvailable(ChiangMaiGoose value) { this.isAnyAvailable = value; }

    @JsonProperty("taxonomyID")
    public BeijingPigeon getTaxonomyID() { return taxonomyID; }
    @JsonProperty("taxonomyID")
    public void setTaxonomyID(BeijingPigeon value) { this.taxonomyID = value; }

    @JsonProperty("order")
    public BeijingPigeon getOrder() { return order; }
    @JsonProperty("order")
    public void setOrder(BeijingPigeon value) { this.order = value; }
}
