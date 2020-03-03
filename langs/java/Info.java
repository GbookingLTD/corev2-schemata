package ru.gbooking.apiv2;

import java.util.*;

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

    public List<CurrencyList> getAcceptedCurrency() { return acceptedCurrency; }
    public void setAcceptedCurrency(List<CurrencyList> value) { this.acceptedCurrency = value; }

    public String getAdditionalInfo() { return additionalInfo; }
    public void setAdditionalInfo(String value) { this.additionalInfo = value; }

    public List<AdditionalFields> getAdditionalFields() { return additionalFields; }
    public void setAdditionalFields(List<AdditionalFields> value) { this.additionalFields = value; }

    /**
     * Адреса компании или филиала
     */
    public List<AddressElement> getAddress() { return address; }
    public void setAddress(List<AddressElement> value) { this.address = value; }

    public Boolean getAutoAcceptAppointment() { return autoAcceptAppointment; }
    public void setAutoAcceptAppointment(Boolean value) { this.autoAcceptAppointment = value; }

    /**
     * если данный бизнес является витриной, идентификаторы бизнесов, которые входят в витрину
     */
    public List<BusinessShowcaseAlias> getBusinessShowcaseAliases() { return businessShowcaseAliases; }
    public void setBusinessShowcaseAliases(List<BusinessShowcaseAlias> value) { this.businessShowcaseAliases = value; }

    public String getContactName() { return contactName; }
    public void setContactName(String value) { this.contactName = value; }

    public String getDateJoined() { return dateJoined; }
    public void setDateJoined(String value) { this.dateJoined = value; }

    public String getDescription() { return description; }
    public void setDescription(String value) { this.description = value; }

    /**
     * Список e-mail адресов компании или филиала
     */
    public String getEmail() { return email; }
    public void setEmail(String value) { this.email = value; }

    public List<Phone> getFax() { return fax; }
    public void setFax(List<Phone> value) { this.fax = value; }

    public List<String> getImages() { return images; }
    public void setImages(List<String> value) { this.images = value; }

    public List<Map<String, Object>> getInstantMessaging() { return instantMessaging; }
    public void setInstantMessaging(List<Map<String, Object>> value) { this.instantMessaging = value; }

    /**
     * является ли данный бизнес витриной
     */
    public Boolean getIsShowcase() { return isShowcase; }
    public void setIsShowcase(Boolean value) { this.isShowcase = value; }

    public LanguageList getLanguage() { return language; }
    public void setLanguage(LanguageList value) { this.language = value; }

    public String getLogoURL() { return logoURL; }
    public void setLogoURL(String value) { this.logoURL = value; }

    public MarketingNotifications getMarketingNotifications() { return marketingNotifications; }
    public void setMarketingNotifications(MarketingNotifications value) { this.marketingNotifications = value; }

    public Metro getMetro() { return metro; }
    public void setMetro(Metro value) { this.metro = value; }

    public Double getMinBookingTime() { return minBookingTime; }
    public void setMinBookingTime(Double value) { this.minBookingTime = value; }

    /**
     * Список телефонов бизнеса
     */
    public List<Phone> getMobile() { return mobile; }
    public void setMobile(List<Phone> value) { this.mobile = value; }

    /**
     * Название бизнеса
     */
    public String getName() { return name; }
    public void setName(String value) { this.name = value; }

    public Double getNetworkID() { return networkID; }
    public void setNetworkID(Double value) { this.networkID = value; }

    public List<String> getNewboEnabledFor() { return newboEnabledFor; }
    public void setNewboEnabledFor(List<String> value) { this.newboEnabledFor = value; }

    public PaymentMethods getPaymentMethods() { return paymentMethods; }
    public void setPaymentMethods(PaymentMethods value) { this.paymentMethods = value; }

    /**
     * Список телефонов бизнеса
     */
    public List<Phone> getPhone() { return phone; }
    public void setPhone(List<Phone> value) { this.phone = value; }

    public String getPhoneMask() { return phoneMask; }
    public void setPhoneMask(String value) { this.phoneMask = value; }

    public PricingType getPricingType() { return pricingType; }
    public void setPricingType(PricingType value) { this.pricingType = value; }

    public Double getRevisionVersion() { return revisionVersion; }
    public void setRevisionVersion(Double value) { this.revisionVersion = value; }

    public Double getSchedulerTick() { return schedulerTick; }
    public void setSchedulerTick(Double value) { this.schedulerTick = value; }

    /**
     * Короткое название филиала
     */
    public String getShortName() { return shortName; }
    public void setShortName(String value) { this.shortName = value; }

    public Boolean getShowAppointmentColor() { return showAppointmentColor; }
    public void setShowAppointmentColor(Boolean value) { this.showAppointmentColor = value; }

    public Boolean getShowAppointmentTooltip() { return showAppointmentTooltip; }
    public void setShowAppointmentTooltip(Boolean value) { this.showAppointmentTooltip = value; }

    /**
     * идентификаторы витрин, в которых участвует данный бизнес
     */
    public List<Showcase> getShowcases() { return showcases; }
    public void setShowcases(List<Showcase> value) { this.showcases = value; }

    public Boolean getShowResourceWorkStatistics() { return showResourceWorkStatistics; }
    public void setShowResourceWorkStatistics(Boolean value) { this.showResourceWorkStatistics = value; }

    public Boolean getShowWorkerProfession() { return showWorkerProfession; }
    public void setShowWorkerProfession(Boolean value) { this.showWorkerProfession = value; }

    public Boolean getSkipBilling() { return skipBilling; }
    public void setSkipBilling(Boolean value) { this.skipBilling = value; }

    public SMSDuplicateFilter getSMSDuplicateFilter() { return smsDuplicateFilter; }
    public void setSMSDuplicateFilter(SMSDuplicateFilter value) { this.smsDuplicateFilter = value; }

    public List<SocialNetworkSchema> getSocialNetwork() { return socialNetwork; }
    public void setSocialNetwork(List<SocialNetworkSchema> value) { this.socialNetwork = value; }

    public Timetable getTimetable() { return timetable; }
    public void setTimetable(Timetable value) { this.timetable = value; }

    public String getTimezone() { return timezone; }
    public void setTimezone(String value) { this.timezone = value; }

    public VerticalTranslation getVerticalTranslation() { return verticalTranslation; }
    public void setVerticalTranslation(VerticalTranslation value) { this.verticalTranslation = value; }

    public String getWebsite() { return website; }
    public void setWebsite(String value) { this.website = value; }
}
