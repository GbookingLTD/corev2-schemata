package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class FluffyTaxonomyShowcase {
    private String baseBusinessID;
    private Boolean isBaseNode;
    private String originBusinessID;
    private String showcaseItemID;

    @JsonProperty("baseBusinessID")
    public String getBaseBusinessID() { return baseBusinessID; }
    @JsonProperty("baseBusinessID")
    public void setBaseBusinessID(String value) { this.baseBusinessID = value; }

    @JsonProperty("isBaseNode")
    public Boolean getIsBaseNode() { return isBaseNode; }
    @JsonProperty("isBaseNode")
    public void setIsBaseNode(Boolean value) { this.isBaseNode = value; }

    @JsonProperty("originBusinessID")
    public String getOriginBusinessID() { return originBusinessID; }
    @JsonProperty("originBusinessID")
    public void setOriginBusinessID(String value) { this.originBusinessID = value; }

    @JsonProperty("showcaseItemID")
    public String getShowcaseItemID() { return showcaseItemID; }
    @JsonProperty("showcaseItemID")
    public void setShowcaseItemID(String value) { this.showcaseItemID = value; }
}
