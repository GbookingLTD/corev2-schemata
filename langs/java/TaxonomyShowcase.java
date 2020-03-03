package ru.gbooking.apiv2;

import java.util.*;

public class TaxonomyShowcase {
    private String baseBusinessID;
    private Boolean isBaseNode;
    private String originBusinessID;
    private String showcaseItemID;

    public String getBaseBusinessID() { return baseBusinessID; }
    public void setBaseBusinessID(String value) { this.baseBusinessID = value; }

    public Boolean getIsBaseNode() { return isBaseNode; }
    public void setIsBaseNode(Boolean value) { this.isBaseNode = value; }

    public String getOriginBusinessID() { return originBusinessID; }
    public void setOriginBusinessID(String value) { this.originBusinessID = value; }

    public String getShowcaseItemID() { return showcaseItemID; }
    public void setShowcaseItemID(String value) { this.showcaseItemID = value; }
}
