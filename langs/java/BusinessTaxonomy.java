package ru.gbooking.apiv2;

import java.util.*;

public class BusinessTaxonomy {
    private Boolean active;
    private List<AdditionalDuration> additionalDurations;
    private List<BusinessTaxonomyPrice> additionalPrices;
    private List<BusinessTaxonomyProduct> additionalProducts;
    private List<Map<String, Object>> additionalTaxonomyExtraID;
    private Boolean adjacentSameTimeStart;
    private List<AdjacentTaxonomy> adjacentTaxonomies;
    private Map<String, Object> alias;
    private Boolean allowBookingInBO;
    private Double allowNextBookingCount;
    private Double allowNextBookingInDays;
    private String allowNextBookingInDaysText;
    private List<String> cabinets;
    private Boolean cabinetsEnabled;
    private Double capacity;
    private Double capacityDecrease;
    private Double chargeUnitsStep;
    private List<ChildrenTaxonomyType> childrenTaxonomyTypes;
    private String color;
    private String confirmationAlert;
    private String confirmationSMSAlert;
    private List<DateLimit> dateLimits;
    private DateLimitType dateLimitType;
    private List<String> designs;
    private Discount discounts;
    private Boolean displayInWidget;
    private Double duration;
    private List<Object> exceptions;
    private String extraDescription;
    private String extraID;
    private String extraLink;
    private Boolean forPay;
    private String id;
    private List<String> images;
    private Boolean isOther;
    private String lastModified;
    private List<String> leaves;
    private Boolean manualChanges;
    private Boolean newTaxonomy;
    private OnlineMode onlineMode;
    private List<String> onlyAfterTaxonomies;
    private Double order;
    private List<String> parallelTaxonomies;
    private Double popularity;
    private Price price;
    private String priceLink;
    private List<String> rooms;
    private List<ShowcaseItem> showcaseItems;
    private List<TaxonomyShowcase> showcases;
    private String showcaseTaxonomyID;
    private String siteID;
    private String specialCabinet;
    private String taxonomyAppExtraID;
    private String taxonomyCategoryExtraID;
    private String taxonomyParentID;
    private TaxonomyType taxonomyType;
    private Timetable timetable;
    private Boolean useConfirmationSMSAlert;
    private String visitType;

    public Boolean getActive() { return active; }
    public void setActive(Boolean value) { this.active = value; }

    public List<AdditionalDuration> getAdditionalDurations() { return additionalDurations; }
    public void setAdditionalDurations(List<AdditionalDuration> value) { this.additionalDurations = value; }

    public List<BusinessTaxonomyPrice> getAdditionalPrices() { return additionalPrices; }
    public void setAdditionalPrices(List<BusinessTaxonomyPrice> value) { this.additionalPrices = value; }

    public List<BusinessTaxonomyProduct> getAdditionalProducts() { return additionalProducts; }
    public void setAdditionalProducts(List<BusinessTaxonomyProduct> value) { this.additionalProducts = value; }

    public List<Map<String, Object>> getAdditionalTaxonomyExtraID() { return additionalTaxonomyExtraID; }
    public void setAdditionalTaxonomyExtraID(List<Map<String, Object>> value) { this.additionalTaxonomyExtraID = value; }

    public Boolean getAdjacentSameTimeStart() { return adjacentSameTimeStart; }
    public void setAdjacentSameTimeStart(Boolean value) { this.adjacentSameTimeStart = value; }

    public List<AdjacentTaxonomy> getAdjacentTaxonomies() { return adjacentTaxonomies; }
    public void setAdjacentTaxonomies(List<AdjacentTaxonomy> value) { this.adjacentTaxonomies = value; }

    public Map<String, Object> getAlias() { return alias; }
    public void setAlias(Map<String, Object> value) { this.alias = value; }

    public Boolean getAllowBookingInBO() { return allowBookingInBO; }
    public void setAllowBookingInBO(Boolean value) { this.allowBookingInBO = value; }

    public Double getAllowNextBookingCount() { return allowNextBookingCount; }
    public void setAllowNextBookingCount(Double value) { this.allowNextBookingCount = value; }

    public Double getAllowNextBookingInDays() { return allowNextBookingInDays; }
    public void setAllowNextBookingInDays(Double value) { this.allowNextBookingInDays = value; }

    public String getAllowNextBookingInDaysText() { return allowNextBookingInDaysText; }
    public void setAllowNextBookingInDaysText(String value) { this.allowNextBookingInDaysText = value; }

    public List<String> getCabinets() { return cabinets; }
    public void setCabinets(List<String> value) { this.cabinets = value; }

    public Boolean getCabinetsEnabled() { return cabinetsEnabled; }
    public void setCabinetsEnabled(Boolean value) { this.cabinetsEnabled = value; }

    public Double getCapacity() { return capacity; }
    public void setCapacity(Double value) { this.capacity = value; }

    public Double getCapacityDecrease() { return capacityDecrease; }
    public void setCapacityDecrease(Double value) { this.capacityDecrease = value; }

    public Double getChargeUnitsStep() { return chargeUnitsStep; }
    public void setChargeUnitsStep(Double value) { this.chargeUnitsStep = value; }

    public List<ChildrenTaxonomyType> getChildrenTaxonomyTypes() { return childrenTaxonomyTypes; }
    public void setChildrenTaxonomyTypes(List<ChildrenTaxonomyType> value) { this.childrenTaxonomyTypes = value; }

    public String getColor() { return color; }
    public void setColor(String value) { this.color = value; }

    public String getConfirmationAlert() { return confirmationAlert; }
    public void setConfirmationAlert(String value) { this.confirmationAlert = value; }

    public String getConfirmationSMSAlert() { return confirmationSMSAlert; }
    public void setConfirmationSMSAlert(String value) { this.confirmationSMSAlert = value; }

    public List<DateLimit> getDateLimits() { return dateLimits; }
    public void setDateLimits(List<DateLimit> value) { this.dateLimits = value; }

    public DateLimitType getDateLimitType() { return dateLimitType; }
    public void setDateLimitType(DateLimitType value) { this.dateLimitType = value; }

    public List<String> getDesigns() { return designs; }
    public void setDesigns(List<String> value) { this.designs = value; }

    public Discount getDiscounts() { return discounts; }
    public void setDiscounts(Discount value) { this.discounts = value; }

    public Boolean getDisplayInWidget() { return displayInWidget; }
    public void setDisplayInWidget(Boolean value) { this.displayInWidget = value; }

    public Double getDuration() { return duration; }
    public void setDuration(Double value) { this.duration = value; }

    public List<Object> getExceptions() { return exceptions; }
    public void setExceptions(List<Object> value) { this.exceptions = value; }

    public String getExtraDescription() { return extraDescription; }
    public void setExtraDescription(String value) { this.extraDescription = value; }

    public String getExtraID() { return extraID; }
    public void setExtraID(String value) { this.extraID = value; }

    public String getExtraLink() { return extraLink; }
    public void setExtraLink(String value) { this.extraLink = value; }

    public Boolean getForPay() { return forPay; }
    public void setForPay(Boolean value) { this.forPay = value; }

    public String getID() { return id; }
    public void setID(String value) { this.id = value; }

    public List<String> getImages() { return images; }
    public void setImages(List<String> value) { this.images = value; }

    public Boolean getIsOther() { return isOther; }
    public void setIsOther(Boolean value) { this.isOther = value; }

    public String getLastModified() { return lastModified; }
    public void setLastModified(String value) { this.lastModified = value; }

    public List<String> getLeaves() { return leaves; }
    public void setLeaves(List<String> value) { this.leaves = value; }

    public Boolean getManualChanges() { return manualChanges; }
    public void setManualChanges(Boolean value) { this.manualChanges = value; }

    public Boolean getNewTaxonomy() { return newTaxonomy; }
    public void setNewTaxonomy(Boolean value) { this.newTaxonomy = value; }

    public OnlineMode getOnlineMode() { return onlineMode; }
    public void setOnlineMode(OnlineMode value) { this.onlineMode = value; }

    public List<String> getOnlyAfterTaxonomies() { return onlyAfterTaxonomies; }
    public void setOnlyAfterTaxonomies(List<String> value) { this.onlyAfterTaxonomies = value; }

    public Double getOrder() { return order; }
    public void setOrder(Double value) { this.order = value; }

    public List<String> getParallelTaxonomies() { return parallelTaxonomies; }
    public void setParallelTaxonomies(List<String> value) { this.parallelTaxonomies = value; }

    public Double getPopularity() { return popularity; }
    public void setPopularity(Double value) { this.popularity = value; }

    public Price getPrice() { return price; }
    public void setPrice(Price value) { this.price = value; }

    public String getPriceLink() { return priceLink; }
    public void setPriceLink(String value) { this.priceLink = value; }

    public List<String> getRooms() { return rooms; }
    public void setRooms(List<String> value) { this.rooms = value; }

    public List<ShowcaseItem> getShowcaseItems() { return showcaseItems; }
    public void setShowcaseItems(List<ShowcaseItem> value) { this.showcaseItems = value; }

    public List<TaxonomyShowcase> getShowcases() { return showcases; }
    public void setShowcases(List<TaxonomyShowcase> value) { this.showcases = value; }

    /**
     * Идентификатор услуги в витрине
     */
    public String getShowcaseTaxonomyID() { return showcaseTaxonomyID; }
    public void setShowcaseTaxonomyID(String value) { this.showcaseTaxonomyID = value; }

    /**
     * Внешний идентификатор таксономии
     */
    public String getSiteID() { return siteID; }
    public void setSiteID(String value) { this.siteID = value; }

    public String getSpecialCabinet() { return specialCabinet; }
    public void setSpecialCabinet(String value) { this.specialCabinet = value; }

    public String getTaxonomyAppExtraID() { return taxonomyAppExtraID; }
    public void setTaxonomyAppExtraID(String value) { this.taxonomyAppExtraID = value; }

    public String getTaxonomyCategoryExtraID() { return taxonomyCategoryExtraID; }
    public void setTaxonomyCategoryExtraID(String value) { this.taxonomyCategoryExtraID = value; }

    public String getTaxonomyParentID() { return taxonomyParentID; }
    public void setTaxonomyParentID(String value) { this.taxonomyParentID = value; }

    public TaxonomyType getTaxonomyType() { return taxonomyType; }
    public void setTaxonomyType(TaxonomyType value) { this.taxonomyType = value; }

    public Timetable getTimetable() { return timetable; }
    public void setTimetable(Timetable value) { this.timetable = value; }

    public Boolean getUseConfirmationSMSAlert() { return useConfirmationSMSAlert; }
    public void setUseConfirmationSMSAlert(Boolean value) { this.useConfirmationSMSAlert = value; }

    public String getVisitType() { return visitType; }
    public void setVisitType(String value) { this.visitType = value; }
}
