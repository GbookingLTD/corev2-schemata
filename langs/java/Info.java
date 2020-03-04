package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

/**
 * (только в витрине) объект с данными бизнеса-филиала
 *
 * Содержит детальную информацию о бизнесе — название, адрес, график работы и другое
 */
public class Info {
    private List<CurrencyList> acceptedCurrency;
    private String additionalInfo;
    private List<AdditionalFields> additionalFields;
    private List<AddressElement> address;
    private Boolean autoAcceptAppointment;
    private List<BusinessShowcaseAlias> businessShowcaseAliases;
    private String contactName;
    private String dateJoined;
    private String description;
    private String email;
    private List<Phone> fax;
    private List<String> images;
    private List<Map<String, Object>> instantMessaging;
    private Boolean isShowcase;
    private LanguageList language;
    private String logoURL;
    private MarketingNotifications marketingNotifications;
    private Metro metro;
    private Double minBookingTime;
    private List<Phone> mobile;
    private String name;
    private Double networkID;
    private List<String> newboEnabledFor;
    private PaymentMethods paymentMethods;
    private List<Phone> phone;
    private String phoneMask;
    private PricingType pricingType;
    private Double revisionVersion;
    private Double schedulerTick;
    private String shortName;
    private Boolean showAppointmentColor;
    private Boolean showAppointmentTooltip;
    private List<Showcase> showcases;
    private Boolean showResourceWorkStatistics;
    private Boolean showWorkerProfession;
    private Boolean skipBilling;
    private SMSDuplicateFilter smsDuplicateFilter;
    private List<SocialNetworkSchema> socialNetwork;
    private Timetable timetable;
    private String timezone;
    private VerticalTranslation verticalTranslation;
    private String website;

    @JsonProperty("accepted_currency")
    public List<CurrencyList> getAcceptedCurrency() { return acceptedCurrency; }
    @JsonProperty("accepted_currency")
    public void setAcceptedCurrency(List<CurrencyList> value) { this.acceptedCurrency = value; }

    @JsonProperty("additional_info")
    public String getAdditionalInfo() { return additionalInfo; }
    @JsonProperty("additional_info")
    public void setAdditionalInfo(String value) { this.additionalInfo = value; }

    @JsonProperty("additionalFields")
    public List<AdditionalFields> getAdditionalFields() { return additionalFields; }
    @JsonProperty("additionalFields")
    public void setAdditionalFields(List<AdditionalFields> value) { this.additionalFields = value; }

    /**
     * Адреса компании или филиала
     */
    @JsonProperty("address")
    public List<AddressElement> getAddress() { return address; }
    @JsonProperty("address")
    public void setAddress(List<AddressElement> value) { this.address = value; }

    @JsonProperty("autoAcceptAppointment")
    public Boolean getAutoAcceptAppointment() { return autoAcceptAppointment; }
    @JsonProperty("autoAcceptAppointment")
    public void setAutoAcceptAppointment(Boolean value) { this.autoAcceptAppointment = value; }

    /**
     * если данный бизнес является витриной, идентификаторы бизнесов, которые входят в витрину
     */
    @JsonProperty("businessShowcaseAliases")
    public List<BusinessShowcaseAlias> getBusinessShowcaseAliases() { return businessShowcaseAliases; }
    @JsonProperty("businessShowcaseAliases")
    public void setBusinessShowcaseAliases(List<BusinessShowcaseAlias> value) { this.businessShowcaseAliases = value; }

    @JsonProperty("contactName")
    public String getContactName() { return contactName; }
    @JsonProperty("contactName")
    public void setContactName(String value) { this.contactName = value; }

    @JsonProperty("date_joined")
    public String getDateJoined() { return dateJoined; }
    @JsonProperty("date_joined")
    public void setDateJoined(String value) { this.dateJoined = value; }

    @JsonProperty("description")
    public String getDescription() { return description; }
    @JsonProperty("description")
    public void setDescription(String value) { this.description = value; }

    /**
     * Список e-mail адресов компании или филиала
     */
    @JsonProperty("email")
    public String getEmail() { return email; }
    @JsonProperty("email")
    public void setEmail(String value) { this.email = value; }

    @JsonProperty("fax")
    public List<Phone> getFax() { return fax; }
    @JsonProperty("fax")
    public void setFax(List<Phone> value) { this.fax = value; }

    @JsonProperty("images")
    public List<String> getImages() { return images; }
    @JsonProperty("images")
    public void setImages(List<String> value) { this.images = value; }

    @JsonProperty("instant_messaging")
    public List<Map<String, Object>> getInstantMessaging() { return instantMessaging; }
    @JsonProperty("instant_messaging")
    public void setInstantMessaging(List<Map<String, Object>> value) { this.instantMessaging = value; }

    /**
     * является ли данный бизнес витриной
     */
    @JsonProperty("isShowcase")
    public Boolean getIsShowcase() { return isShowcase; }
    @JsonProperty("isShowcase")
    public void setIsShowcase(Boolean value) { this.isShowcase = value; }

    @JsonProperty("language")
    public LanguageList getLanguage() { return language; }
    @JsonProperty("language")
    public void setLanguage(LanguageList value) { this.language = value; }

    @JsonProperty("logo_url")
    public String getLogoURL() { return logoURL; }
    @JsonProperty("logo_url")
    public void setLogoURL(String value) { this.logoURL = value; }

    @JsonProperty("marketingNotifications")
    public MarketingNotifications getMarketingNotifications() { return marketingNotifications; }
    @JsonProperty("marketingNotifications")
    public void setMarketingNotifications(MarketingNotifications value) { this.marketingNotifications = value; }

    @JsonProperty("metro")
    public Metro getMetro() { return metro; }
    @JsonProperty("metro")
    public void setMetro(Metro value) { this.metro = value; }

    @JsonProperty("min_booking_time")
    public Double getMinBookingTime() { return minBookingTime; }
    @JsonProperty("min_booking_time")
    public void setMinBookingTime(Double value) { this.minBookingTime = value; }

    /**
     * Список телефонов бизнеса
     */
    @JsonProperty("mobile")
    public List<Phone> getMobile() { return mobile; }
    @JsonProperty("mobile")
    public void setMobile(List<Phone> value) { this.mobile = value; }

    /**
     * Название бизнеса
     */
    @JsonProperty("name")
    public String getName() { return name; }
    @JsonProperty("name")
    public void setName(String value) { this.name = value; }

    @JsonProperty("networkID")
    public Double getNetworkID() { return networkID; }
    @JsonProperty("networkID")
    public void setNetworkID(Double value) { this.networkID = value; }

    @JsonProperty("newboEnabledFor")
    public List<String> getNewboEnabledFor() { return newboEnabledFor; }
    @JsonProperty("newboEnabledFor")
    public void setNewboEnabledFor(List<String> value) { this.newboEnabledFor = value; }

    @JsonProperty("paymentMethods")
    public PaymentMethods getPaymentMethods() { return paymentMethods; }
    @JsonProperty("paymentMethods")
    public void setPaymentMethods(PaymentMethods value) { this.paymentMethods = value; }

    /**
     * Список телефонов бизнеса
     */
    @JsonProperty("phone")
    public List<Phone> getPhone() { return phone; }
    @JsonProperty("phone")
    public void setPhone(List<Phone> value) { this.phone = value; }

    @JsonProperty("phone_mask")
    public String getPhoneMask() { return phoneMask; }
    @JsonProperty("phone_mask")
    public void setPhoneMask(String value) { this.phoneMask = value; }

    @JsonProperty("pricingType")
    public PricingType getPricingType() { return pricingType; }
    @JsonProperty("pricingType")
    public void setPricingType(PricingType value) { this.pricingType = value; }

    @JsonProperty("revisionVersion")
    public Double getRevisionVersion() { return revisionVersion; }
    @JsonProperty("revisionVersion")
    public void setRevisionVersion(Double value) { this.revisionVersion = value; }

    @JsonProperty("schedulerTick")
    public Double getSchedulerTick() { return schedulerTick; }
    @JsonProperty("schedulerTick")
    public void setSchedulerTick(Double value) { this.schedulerTick = value; }

    /**
     * Короткое название филиала
     */
    @JsonProperty("shortName")
    public String getShortName() { return shortName; }
    @JsonProperty("shortName")
    public void setShortName(String value) { this.shortName = value; }

    @JsonProperty("showAppointmentColor")
    public Boolean getShowAppointmentColor() { return showAppointmentColor; }
    @JsonProperty("showAppointmentColor")
    public void setShowAppointmentColor(Boolean value) { this.showAppointmentColor = value; }

    @JsonProperty("showAppointmentTooltip")
    public Boolean getShowAppointmentTooltip() { return showAppointmentTooltip; }
    @JsonProperty("showAppointmentTooltip")
    public void setShowAppointmentTooltip(Boolean value) { this.showAppointmentTooltip = value; }

    /**
     * идентификаторы витрин, в которых участвует данный бизнес
     */
    @JsonProperty("showcases")
    public List<Showcase> getShowcases() { return showcases; }
    @JsonProperty("showcases")
    public void setShowcases(List<Showcase> value) { this.showcases = value; }

    @JsonProperty("showResourceWorkStatistics")
    public Boolean getShowResourceWorkStatistics() { return showResourceWorkStatistics; }
    @JsonProperty("showResourceWorkStatistics")
    public void setShowResourceWorkStatistics(Boolean value) { this.showResourceWorkStatistics = value; }

    @JsonProperty("showWorkerProfession")
    public Boolean getShowWorkerProfession() { return showWorkerProfession; }
    @JsonProperty("showWorkerProfession")
    public void setShowWorkerProfession(Boolean value) { this.showWorkerProfession = value; }

    @JsonProperty("skipBilling")
    public Boolean getSkipBilling() { return skipBilling; }
    @JsonProperty("skipBilling")
    public void setSkipBilling(Boolean value) { this.skipBilling = value; }

    @JsonProperty("smsDuplicateFilter")
    public SMSDuplicateFilter getSMSDuplicateFilter() { return smsDuplicateFilter; }
    @JsonProperty("smsDuplicateFilter")
    public void setSMSDuplicateFilter(SMSDuplicateFilter value) { this.smsDuplicateFilter = value; }

    @JsonProperty("social_network")
    public List<SocialNetworkSchema> getSocialNetwork() { return socialNetwork; }
    @JsonProperty("social_network")
    public void setSocialNetwork(List<SocialNetworkSchema> value) { this.socialNetwork = value; }

    @JsonProperty("timetable")
    public Timetable getTimetable() { return timetable; }
    @JsonProperty("timetable")
    public void setTimetable(Timetable value) { this.timetable = value; }

    @JsonProperty("timezone")
    public String getTimezone() { return timezone; }
    @JsonProperty("timezone")
    public void setTimezone(String value) { this.timezone = value; }

    @JsonProperty("verticalTranslation")
    public VerticalTranslation getVerticalTranslation() { return verticalTranslation; }
    @JsonProperty("verticalTranslation")
    public void setVerticalTranslation(VerticalTranslation value) { this.verticalTranslation = value; }

    @JsonProperty("website")
    public String getWebsite() { return website; }
    @JsonProperty("website")
    public void setWebsite(String value) { this.website = value; }
}
