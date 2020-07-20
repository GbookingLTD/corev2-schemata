package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;
import java.time.OffsetDateTime;
import java.util.List;
import java.util.Map;

/**
 * Данные о услуге бизнеса
 */
public class ResultTaxonomy {
    private Data alias;
    private String extraID;
    private String id;
    private Boolean active;
    private List<PurpleAdditionalDuration> additionalDurations;
    private List<AdditionalBusinessTaxonomyPrice> additionalPrices;
    private List<PurpleBusinessTaxonomyProduct> additionalProducts;
    private List<Map<String, Object>> additionalTaxonomyExtraID;
    private Boolean adjacentSameTimeStart;
    private List<PurpleAdjacentTaxonomy> adjacentTaxonomies;
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
    private String confirmationEmailAlert;
    private String confirmationSMSAlert;
    private List<PurpleDateLimit> dateLimits;
    private DateLimitType dateLimitType;
    private List<String> designs;
    private Boolean disableClientSMSNotifications;
    private List<Discount> discounts;
    private Boolean displayInWidget;
    private Double duration;
    private List<Object> exceptions;
    private String extraDescription;
    private String extraLink;
    private Boolean forPay;
    private List<String> images;
    private Boolean isOther;
    private Boolean isTelemed;
    private OffsetDateTime lastModified;
    private List<String> leaves;
    private Boolean manualChanges;
    private Boolean newTaxonomy;
    private OnlineMode onlineMode;
    private List<String> onlyAfterTaxonomies;
    private Double order;
    private List<String> parallelTaxonomies;
    private Double popularity;
    private PurplePrice price;
    private String priceLink;
    private List<String> receptionTypes;
    private List<String> rooms;
    private List<PurpleShowcaseItem> showcaseItems;
    private List<PurpleTaxonomyShowcase> showcases;
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

    @JsonProperty("alias")
    public Data getAlias() { return alias; }
    @JsonProperty("alias")
    public void setAlias(Data value) { this.alias = value; }

    @JsonProperty("extraId")
    public String getExtraID() { return extraID; }
    @JsonProperty("extraId")
    public void setExtraID(String value) { this.extraID = value; }

    @JsonProperty("id")
    public String getID() { return id; }
    @JsonProperty("id")
    public void setID(String value) { this.id = value; }

    @JsonProperty("active")
    public Boolean getActive() { return active; }
    @JsonProperty("active")
    public void setActive(Boolean value) { this.active = value; }

    @JsonProperty("additionalDurations")
    public List<PurpleAdditionalDuration> getAdditionalDurations() { return additionalDurations; }
    @JsonProperty("additionalDurations")
    public void setAdditionalDurations(List<PurpleAdditionalDuration> value) { this.additionalDurations = value; }

    @JsonProperty("additionalPrices")
    public List<AdditionalBusinessTaxonomyPrice> getAdditionalPrices() { return additionalPrices; }
    @JsonProperty("additionalPrices")
    public void setAdditionalPrices(List<AdditionalBusinessTaxonomyPrice> value) { this.additionalPrices = value; }

    @JsonProperty("additionalProducts")
    public List<PurpleBusinessTaxonomyProduct> getAdditionalProducts() { return additionalProducts; }
    @JsonProperty("additionalProducts")
    public void setAdditionalProducts(List<PurpleBusinessTaxonomyProduct> value) { this.additionalProducts = value; }

    @JsonProperty("additionalTaxonomyExtraId")
    public List<Map<String, Object>> getAdditionalTaxonomyExtraID() { return additionalTaxonomyExtraID; }
    @JsonProperty("additionalTaxonomyExtraId")
    public void setAdditionalTaxonomyExtraID(List<Map<String, Object>> value) { this.additionalTaxonomyExtraID = value; }

    @JsonProperty("adjacentSameTimeStart")
    public Boolean getAdjacentSameTimeStart() { return adjacentSameTimeStart; }
    @JsonProperty("adjacentSameTimeStart")
    public void setAdjacentSameTimeStart(Boolean value) { this.adjacentSameTimeStart = value; }

    @JsonProperty("adjacentTaxonomies")
    public List<PurpleAdjacentTaxonomy> getAdjacentTaxonomies() { return adjacentTaxonomies; }
    @JsonProperty("adjacentTaxonomies")
    public void setAdjacentTaxonomies(List<PurpleAdjacentTaxonomy> value) { this.adjacentTaxonomies = value; }

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

    @JsonProperty("confirmationEmailAlert")
    public String getConfirmationEmailAlert() { return confirmationEmailAlert; }
    @JsonProperty("confirmationEmailAlert")
    public void setConfirmationEmailAlert(String value) { this.confirmationEmailAlert = value; }

    @JsonProperty("confirmationSmsAlert")
    public String getConfirmationSMSAlert() { return confirmationSMSAlert; }
    @JsonProperty("confirmationSmsAlert")
    public void setConfirmationSMSAlert(String value) { this.confirmationSMSAlert = value; }

    @JsonProperty("dateLimits")
    public List<PurpleDateLimit> getDateLimits() { return dateLimits; }
    @JsonProperty("dateLimits")
    public void setDateLimits(List<PurpleDateLimit> value) { this.dateLimits = value; }

    @JsonProperty("dateLimitType")
    public DateLimitType getDateLimitType() { return dateLimitType; }
    @JsonProperty("dateLimitType")
    public void setDateLimitType(DateLimitType value) { this.dateLimitType = value; }

    @JsonProperty("designs")
    public List<String> getDesigns() { return designs; }
    @JsonProperty("designs")
    public void setDesigns(List<String> value) { this.designs = value; }

    @JsonProperty("disableClientSmsNotifications")
    public Boolean getDisableClientSMSNotifications() { return disableClientSMSNotifications; }
    @JsonProperty("disableClientSmsNotifications")
    public void setDisableClientSMSNotifications(Boolean value) { this.disableClientSMSNotifications = value; }

    @JsonProperty("discounts")
    public List<Discount> getDiscounts() { return discounts; }
    @JsonProperty("discounts")
    public void setDiscounts(List<Discount> value) { this.discounts = value; }

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

    @JsonProperty("extraLink")
    public String getExtraLink() { return extraLink; }
    @JsonProperty("extraLink")
    public void setExtraLink(String value) { this.extraLink = value; }

    @JsonProperty("forPay")
    public Boolean getForPay() { return forPay; }
    @JsonProperty("forPay")
    public void setForPay(Boolean value) { this.forPay = value; }

    @JsonProperty("images")
    public List<String> getImages() { return images; }
    @JsonProperty("images")
    public void setImages(List<String> value) { this.images = value; }

    @JsonProperty("isOther")
    public Boolean getIsOther() { return isOther; }
    @JsonProperty("isOther")
    public void setIsOther(Boolean value) { this.isOther = value; }

    @JsonProperty("isTelemed")
    public Boolean getIsTelemed() { return isTelemed; }
    @JsonProperty("isTelemed")
    public void setIsTelemed(Boolean value) { this.isTelemed = value; }

    @JsonProperty("lastModified")
    public OffsetDateTime getLastModified() { return lastModified; }
    @JsonProperty("lastModified")
    public void setLastModified(OffsetDateTime value) { this.lastModified = value; }

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
    public PurplePrice getPrice() { return price; }
    @JsonProperty("price")
    public void setPrice(PurplePrice value) { this.price = value; }

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
    public List<PurpleShowcaseItem> getShowcaseItems() { return showcaseItems; }
    @JsonProperty("showcaseItems")
    public void setShowcaseItems(List<PurpleShowcaseItem> value) { this.showcaseItems = value; }

    @JsonProperty("showcases")
    public List<PurpleTaxonomyShowcase> getShowcases() { return showcases; }
    @JsonProperty("showcases")
    public void setShowcases(List<PurpleTaxonomyShowcase> value) { this.showcases = value; }

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
