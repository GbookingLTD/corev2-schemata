package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class TaxonomyShowcaseProperties {
    private BeijingPigeon baseBusinessID;
    private BeijingPigeon originBusinessID;
    private BeijingPigeon showcaseItemID;
    private BeijingPigeon isBaseNode;

    @JsonProperty("baseBusinessID")
    public BeijingPigeon getBaseBusinessID() { return baseBusinessID; }
    @JsonProperty("baseBusinessID")
    public void setBaseBusinessID(BeijingPigeon value) { this.baseBusinessID = value; }

    @JsonProperty("originBusinessID")
    public BeijingPigeon getOriginBusinessID() { return originBusinessID; }
    @JsonProperty("originBusinessID")
    public void setOriginBusinessID(BeijingPigeon value) { this.originBusinessID = value; }

    @JsonProperty("showcaseItemID")
    public BeijingPigeon getShowcaseItemID() { return showcaseItemID; }
    @JsonProperty("showcaseItemID")
    public void setShowcaseItemID(BeijingPigeon value) { this.showcaseItemID = value; }

    @JsonProperty("isBaseNode")
    public BeijingPigeon getIsBaseNode() { return isBaseNode; }
    @JsonProperty("isBaseNode")
    public void setIsBaseNode(BeijingPigeon value) { this.isBaseNode = value; }
}
