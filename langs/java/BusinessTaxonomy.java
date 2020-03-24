package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

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
    private TaxonomyPrice price;
    private String priceLink;
    private List<String> receptionTypes;
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

    @JsonProperty("active")
    public Boolean getActive() { return active; }
    @JsonProperty("active")
    public void setActive(Boolean value) { this.active = value; }

    @JsonProperty("additionalDurations")
    public List<AdditionalDuration> getAdditionalDurations() { return additionalDurations; }
    @JsonProperty("additionalDurations")
    public void setAdditionalDurations(List<AdditionalDuration> value) { this.additionalDurations = value; }

    @JsonProperty("additionalPrices")
    public List<BusinessTaxonomyPrice> getAdditionalPrices() { return additionalPrices; }
    @JsonProperty("additionalPrices")
    public void setAdditionalPrices(List<BusinessTaxonomyPrice> value) { this.additionalPrices = value; }

    @JsonProperty("additionalProducts")
    public List<BusinessTaxonomyProduct> getAdditionalProducts() { return additionalProducts; }
    @JsonProperty("additionalProducts")
    public void setAdditionalProducts(List<BusinessTaxonomyProduct> value) { this.additionalProducts = value; }

    @JsonProperty("additionalTaxonomyExtraId")
    public List<Map<String, Object>> getAdditionalTaxonomyExtraID() { return additionalTaxonomyExtraID; }
    @JsonProperty("additionalTaxonomyExtraId")
    public void setAdditionalTaxonomyExtraID(List<Map<String, Object>> value) { this.additionalTaxonomyExtraID = value; }

    @JsonProperty("adjacentSameTimeStart")
    public Boolean getAdjacentSameTimeStart() { return adjacentSameTimeStart; }
    @JsonProperty("adjacentSameTimeStart")
    public void setAdjacentSameTimeStart(Boolean value) { this.adjacentSameTimeStart = value; }

    @JsonProperty("adjacentTaxonomies")
    public List<AdjacentTaxonomy> getAdjacentTaxonomies() { return adjacentTaxonomies; }
    @JsonProperty("adjacentTaxonomies")
    public void setAdjacentTaxonomies(List<AdjacentTaxonomy> value) { this.adjacentTaxonomies = value; }

    @JsonProperty("alias")
    public Map<String, Object> getAlias() { return alias; }
    @JsonProperty("alias")
    public void setAlias(Map<String, Object> value) { this.alias = value; }

    @JsonProperty("allowBookingInBO")
    public Boolean getAllowBookingInBO() { return allowBookingInBO; }
    @JsonProperty("allowBookingInBO")
    public void setAllowBookingInBO(Boolean value) { this.allowBookingInBO = value; }

    @JsonProperty("allowNextBookingCount")
    public Double getAllowNextBookingCount() { return allowNextBookingCount; }
    @JsonProperty("allowNextBookingCount")
    public void setAllowNextBookingCount(Double value) { this.allowNextBookingCount = value; }

    @JsonProperty("allowNextBookingInDays")
    public Double getAllowNextBookingInDays() { return allowNextBookingInDays; }
    @JsonProperty("allowNextBookingInDays")
    public void setAllowNextBookingInDays(Double value) { this.allowNextBookingInDays = value; }

    @JsonProperty("allowNextBookingInDaysText")
    public String getAllowNextBookingInDaysText() { return allowNextBookingInDaysText; }
    @JsonProperty("allowNextBookingInDaysText")
    public void setAllowNextBookingInDaysText(String value) { this.allowNextBookingInDaysText = value; }

    @JsonProperty("cabinets")
    public List<String> getCabinets() { return cabinets; }
    @JsonProperty("cabinets")
    public void setCabinets(List<String> value) { this.cabinets = value; }

    @JsonProperty("cabinetsEnabled")
    public Boolean getCabinetsEnabled() { return cabinetsEnabled; }
    @JsonProperty("cabinetsEnabled")
    public void setCabinetsEnabled(Boolean value) { this.cabinetsEnabled = value; }

    @JsonProperty("capacity")
    public Double getCapacity() { return capacity; }
    @JsonProperty("capacity")
    public void setCapacity(Double value) { this.capacity = value; }

    @JsonProperty("capacity_decrease")
    public Double getCapacityDecrease() { return capacityDecrease; }
    @JsonProperty("capacity_decrease")
    public void setCapacityDecrease(Double value) { this.capacityDecrease = value; }

    @JsonProperty("chargeUnitsStep")
    public Double getChargeUnitsStep() { return chargeUnitsStep; }
    @JsonProperty("chargeUnitsStep")
    public void setChargeUnitsStep(Double value) { this.chargeUnitsStep = value; }

    @JsonProperty("childrenTaxonomyTypes")
    public List<ChildrenTaxonomyType> getChildrenTaxonomyTypes() { return childrenTaxonomyTypes; }
    @JsonProperty("childrenTaxonomyTypes")
    public void setChildrenTaxonomyTypes(List<ChildrenTaxonomyType> value) { this.childrenTaxonomyTypes = value; }

    @JsonProperty("color")
    public String getColor() { return color; }
    @JsonProperty("color")
    public void setColor(String value) { this.color = value; }

    @JsonProperty("confirmationAlert")
    public String getConfirmationAlert() { return confirmationAlert; }
    @JsonProperty("confirmationAlert")
    public void setConfirmationAlert(String value) { this.confirmationAlert = value; }

    @JsonProperty("confirmationSmsAlert")
    public String getConfirmationSMSAlert() { return confirmationSMSAlert; }
    @JsonProperty("confirmationSmsAlert")
    public void setConfirmationSMSAlert(String value) { this.confirmationSMSAlert = value; }

    @JsonProperty("dateLimits")
    public List<DateLimit> getDateLimits() { return dateLimits; }
    @JsonProperty("dateLimits")
    public void setDateLimits(List<DateLimit> value) { this.dateLimits = value; }

    @JsonProperty("dateLimitType")
    public DateLimitType getDateLimitType() { return dateLimitType; }
    @JsonProperty("dateLimitType")
    public void setDateLimitType(DateLimitType value) { this.dateLimitType = value; }

    @JsonProperty("designs")
    public List<String> getDesigns() { return designs; }
    @JsonProperty("designs")
    public void setDesigns(List<String> value) { this.designs = value; }

    @JsonProperty("discounts")
    public Discount getDiscounts() { return discounts; }
    @JsonProperty("discounts")
    public void setDiscounts(Discount value) { this.discounts = value; }

    @JsonProperty("displayInWidget")
    public Boolean getDisplayInWidget() { return displayInWidget; }
    @JsonProperty("displayInWidget")
    public void setDisplayInWidget(Boolean value) { this.displayInWidget = value; }

    @JsonProperty("duration")
    public Double getDuration() { return duration; }
    @JsonProperty("duration")
    public void setDuration(Double value) { this.duration = value; }

    @JsonProperty("exceptions")
    public List<Object> getExceptions() { return exceptions; }
    @JsonProperty("exceptions")
    public void setExceptions(List<Object> value) { this.exceptions = value; }

    @JsonProperty("extraDescription")
    public String getExtraDescription() { return extraDescription; }
    @JsonProperty("extraDescription")
    public void setExtraDescription(String value) { this.extraDescription = value; }

    @JsonProperty("extraId")
    public String getExtraID() { return extraID; }
    @JsonProperty("extraId")
    public void setExtraID(String value) { this.extraID = value; }

    @JsonProperty("extraLink")
    public String getExtraLink() { return extraLink; }
    @JsonProperty("extraLink")
    public void setExtraLink(String value) { this.extraLink = value; }

    @JsonProperty("forPay")
    public Boolean getForPay() { return forPay; }
    @JsonProperty("forPay")
    public void setForPay(Boolean value) { this.forPay = value; }

    @JsonProperty("id")
    public String getID() { return id; }
    @JsonProperty("id")
    public void setID(String value) { this.id = value; }

    @JsonProperty("images")
    public List<String> getImages() { return images; }
    @JsonProperty("images")
    public void setImages(List<String> value) { this.images = value; }

    @JsonProperty("isOther")
    public Boolean getIsOther() { return isOther; }
    @JsonProperty("isOther")
    public void setIsOther(Boolean value) { this.isOther = value; }

    @JsonProperty("lastModified")
    public String getLastModified() { return lastModified; }
    @JsonProperty("lastModified")
    public void setLastModified(String value) { this.lastModified = value; }

    @JsonProperty("leaves")
    public List<String> getLeaves() { return leaves; }
    @JsonProperty("leaves")
    public void setLeaves(List<String> value) { this.leaves = value; }

    @JsonProperty("manualChanges")
    public Boolean getManualChanges() { return manualChanges; }
    @JsonProperty("manualChanges")
    public void setManualChanges(Boolean value) { this.manualChanges = value; }

    @JsonProperty("newTaxonomy")
    public Boolean getNewTaxonomy() { return newTaxonomy; }
    @JsonProperty("newTaxonomy")
    public void setNewTaxonomy(Boolean value) { this.newTaxonomy = value; }

    @JsonProperty("onlineMode")
    public OnlineMode getOnlineMode() { return onlineMode; }
    @JsonProperty("onlineMode")
    public void setOnlineMode(OnlineMode value) { this.onlineMode = value; }

    @JsonProperty("onlyAfterTaxonomies")
    public List<String> getOnlyAfterTaxonomies() { return onlyAfterTaxonomies; }
    @JsonProperty("onlyAfterTaxonomies")
    public void setOnlyAfterTaxonomies(List<String> value) { this.onlyAfterTaxonomies = value; }

    @JsonProperty("order")
    public Double getOrder() { return order; }
    @JsonProperty("order")
    public void setOrder(Double value) { this.order = value; }

    @JsonProperty("parallelTaxonomies")
    public List<String> getParallelTaxonomies() { return parallelTaxonomies; }
    @JsonProperty("parallelTaxonomies")
    public void setParallelTaxonomies(List<String> value) { this.parallelTaxonomies = value; }

    @JsonProperty("popularity")
    public Double getPopularity() { return popularity; }
    @JsonProperty("popularity")
    public void setPopularity(Double value) { this.popularity = value; }

    @JsonProperty("price")
    public TaxonomyPrice getPrice() { return price; }
    @JsonProperty("price")
    public void setPrice(TaxonomyPrice value) { this.price = value; }

    @JsonProperty("priceLink")
    public String getPriceLink() { return priceLink; }
    @JsonProperty("priceLink")
    public void setPriceLink(String value) { this.priceLink = value; }

    /**
     * Список видов приема услуги
     */
    @JsonProperty("receptionTypes")
    public List<String> getReceptionTypes() { return receptionTypes; }
    @JsonProperty("receptionTypes")
    public void setReceptionTypes(List<String> value) { this.receptionTypes = value; }

    @JsonProperty("rooms")
    public List<String> getRooms() { return rooms; }
    @JsonProperty("rooms")
    public void setRooms(List<String> value) { this.rooms = value; }

    @JsonProperty("showcaseItems")
    public List<ShowcaseItem> getShowcaseItems() { return showcaseItems; }
    @JsonProperty("showcaseItems")
    public void setShowcaseItems(List<ShowcaseItem> value) { this.showcaseItems = value; }

    @JsonProperty("showcases")
    public List<TaxonomyShowcase> getShowcases() { return showcases; }
    @JsonProperty("showcases")
    public void setShowcases(List<TaxonomyShowcase> value) { this.showcases = value; }

    /**
     * Идентификатор услуги в витрине
     */
    @JsonProperty("showcaseTaxonomyID")
    public String getShowcaseTaxonomyID() { return showcaseTaxonomyID; }
    @JsonProperty("showcaseTaxonomyID")
    public void setShowcaseTaxonomyID(String value) { this.showcaseTaxonomyID = value; }

    /**
     * Внешний идентификатор таксономии
     */
    @JsonProperty("siteId")
    public String getSiteID() { return siteID; }
    @JsonProperty("siteId")
    public void setSiteID(String value) { this.siteID = value; }

    @JsonProperty("specialCabinet")
    public String getSpecialCabinet() { return specialCabinet; }
    @JsonProperty("specialCabinet")
    public void setSpecialCabinet(String value) { this.specialCabinet = value; }

    @JsonProperty("taxonomyAppExtraID")
    public String getTaxonomyAppExtraID() { return taxonomyAppExtraID; }
    @JsonProperty("taxonomyAppExtraID")
    public void setTaxonomyAppExtraID(String value) { this.taxonomyAppExtraID = value; }

    @JsonProperty("taxonomyCategoryExtraID")
    public String getTaxonomyCategoryExtraID() { return taxonomyCategoryExtraID; }
    @JsonProperty("taxonomyCategoryExtraID")
    public void setTaxonomyCategoryExtraID(String value) { this.taxonomyCategoryExtraID = value; }

    @JsonProperty("taxonomyParentID")
    public String getTaxonomyParentID() { return taxonomyParentID; }
    @JsonProperty("taxonomyParentID")
    public void setTaxonomyParentID(String value) { this.taxonomyParentID = value; }

    @JsonProperty("taxonomyType")
    public TaxonomyType getTaxonomyType() { return taxonomyType; }
    @JsonProperty("taxonomyType")
    public void setTaxonomyType(TaxonomyType value) { this.taxonomyType = value; }

    @JsonProperty("timetable")
    public Timetable getTimetable() { return timetable; }
    @JsonProperty("timetable")
    public void setTimetable(Timetable value) { this.timetable = value; }

    @JsonProperty("useConfirmationSmsAlert")
    public Boolean getUseConfirmationSMSAlert() { return useConfirmationSMSAlert; }
    @JsonProperty("useConfirmationSmsAlert")
    public void setUseConfirmationSMSAlert(Boolean value) { this.useConfirmationSMSAlert = value; }

    @JsonProperty("visitType")
    public String getVisitType() { return visitType; }
    @JsonProperty("visitType")
    public void setVisitType(String value) { this.visitType = value; }
}
