package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;
import java.util.List;
import java.util.Map;

/**
 * Данные клиента
 */
public class ClientClass {
    private String address;
    private Data birthday;
    private Boolean blackList;
    private List<ChildrenClient> childrenClients;
    private String clientCardCreationDate;
    private String clientCardNumber;
    private String clientContractNumber;
    private String created;
    private String creatorProfileID;
    private String creatorProfileName;
    private String description;
    private String discountCode;
    private String driverLicense;
    private List<String> email;
    private List<ClientExtraField> extraFields;
    private String extraID;
    private List<ClientFavResource> favResources;
    private String fax;
    private FromSMS fromSMS;
    private List<AddressSchema> fullAddress;
    private String houseNumber;
    private String iconURL;
    private String id;
    private String insuranceCompany;
    private String insuranceNumber;
    private IntegrationDataClass integrationData;
    private Boolean isLazy;
    private IsraelCityUnion israelCity;
    private Boolean isVIP;
    private KupatHolimUnion kupatHolim;
    private LanguageList language;
    private Map<String, Object> lastCreatedAppointment;
    private Map<String, Object> lastVisitedAppointment;
    private String lazyResolvedDate;
    private String locality;
    private LoyaltyInfo loyaltyInfo;
    private String middleName;
    private String name;
    private String passportDate;
    private String passportID;
    private String passportIssued;
    private String passportSeries;
    private List<FaxElement> phone;
    private Boolean receiveSMSAfterService;
    private Sex sex;
    private Boolean skipMarketingNotifications;
    private Boolean skipNotifications;
    private String snils;
    private Statistics statistics;
    private ResourceStatus status;
    private String surname;
    private String taxiPark;
    private TaxiParkMemberCountUnion taxiParkMemberCount;
    private String twoFAUserID;
    private String updated;
    private String workPlace;

    @JsonProperty("address")
    public String getAddress() { return address; }
    @JsonProperty("address")
    public void setAddress(String value) { this.address = value; }

    @JsonProperty("birthday")
    public Data getBirthday() { return birthday; }
    @JsonProperty("birthday")
    public void setBirthday(Data value) { this.birthday = value; }

    @JsonProperty("blackList")
    public Boolean getBlackList() { return blackList; }
    @JsonProperty("blackList")
    public void setBlackList(Boolean value) { this.blackList = value; }

    @JsonProperty("childrenClients")
    public List<ChildrenClient> getChildrenClients() { return childrenClients; }
    @JsonProperty("childrenClients")
    public void setChildrenClients(List<ChildrenClient> value) { this.childrenClients = value; }

    @JsonProperty("clientCardCreationDate")
    public String getClientCardCreationDate() { return clientCardCreationDate; }
    @JsonProperty("clientCardCreationDate")
    public void setClientCardCreationDate(String value) { this.clientCardCreationDate = value; }

    @JsonProperty("clientCardNumber")
    public String getClientCardNumber() { return clientCardNumber; }
    @JsonProperty("clientCardNumber")
    public void setClientCardNumber(String value) { this.clientCardNumber = value; }

    @JsonProperty("clientContractNumber")
    public String getClientContractNumber() { return clientContractNumber; }
    @JsonProperty("clientContractNumber")
    public void setClientContractNumber(String value) { this.clientContractNumber = value; }

    @JsonProperty("created")
    public String getCreated() { return created; }
    @JsonProperty("created")
    public void setCreated(String value) { this.created = value; }

    @JsonProperty("creatorProfileID")
    public String getCreatorProfileID() { return creatorProfileID; }
    @JsonProperty("creatorProfileID")
    public void setCreatorProfileID(String value) { this.creatorProfileID = value; }

    @JsonProperty("creatorProfileName")
    public String getCreatorProfileName() { return creatorProfileName; }
    @JsonProperty("creatorProfileName")
    public void setCreatorProfileName(String value) { this.creatorProfileName = value; }

    @JsonProperty("description")
    public String getDescription() { return description; }
    @JsonProperty("description")
    public void setDescription(String value) { this.description = value; }

    @JsonProperty("discountCode")
    public String getDiscountCode() { return discountCode; }
    @JsonProperty("discountCode")
    public void setDiscountCode(String value) { this.discountCode = value; }

    @JsonProperty("driverLicense")
    public String getDriverLicense() { return driverLicense; }
    @JsonProperty("driverLicense")
    public void setDriverLicense(String value) { this.driverLicense = value; }

    @JsonProperty("email")
    public List<String> getEmail() { return email; }
    @JsonProperty("email")
    public void setEmail(List<String> value) { this.email = value; }

    @JsonProperty("extraFields")
    public List<ClientExtraField> getExtraFields() { return extraFields; }
    @JsonProperty("extraFields")
    public void setExtraFields(List<ClientExtraField> value) { this.extraFields = value; }

    @JsonProperty("extraID")
    public String getExtraID() { return extraID; }
    @JsonProperty("extraID")
    public void setExtraID(String value) { this.extraID = value; }

    @JsonProperty("favResources")
    public List<ClientFavResource> getFavResources() { return favResources; }
    @JsonProperty("favResources")
    public void setFavResources(List<ClientFavResource> value) { this.favResources = value; }

    @JsonProperty("fax")
    public String getFax() { return fax; }
    @JsonProperty("fax")
    public void setFax(String value) { this.fax = value; }

    @JsonProperty("fromSms")
    public FromSMS getFromSMS() { return fromSMS; }
    @JsonProperty("fromSms")
    public void setFromSMS(FromSMS value) { this.fromSMS = value; }

    @JsonProperty("fullAddress")
    public List<AddressSchema> getFullAddress() { return fullAddress; }
    @JsonProperty("fullAddress")
    public void setFullAddress(List<AddressSchema> value) { this.fullAddress = value; }

    @JsonProperty("houseNumber")
    public String getHouseNumber() { return houseNumber; }
    @JsonProperty("houseNumber")
    public void setHouseNumber(String value) { this.houseNumber = value; }

    @JsonProperty("icon_url")
    public String getIconURL() { return iconURL; }
    @JsonProperty("icon_url")
    public void setIconURL(String value) { this.iconURL = value; }

    @JsonProperty("id")
    public String getID() { return id; }
    @JsonProperty("id")
    public void setID(String value) { this.id = value; }

    @JsonProperty("insuranceCompany")
    public String getInsuranceCompany() { return insuranceCompany; }
    @JsonProperty("insuranceCompany")
    public void setInsuranceCompany(String value) { this.insuranceCompany = value; }

    @JsonProperty("insuranceNumber")
    public String getInsuranceNumber() { return insuranceNumber; }
    @JsonProperty("insuranceNumber")
    public void setInsuranceNumber(String value) { this.insuranceNumber = value; }

    @JsonProperty("integrationData")
    public IntegrationDataClass getIntegrationData() { return integrationData; }
    @JsonProperty("integrationData")
    public void setIntegrationData(IntegrationDataClass value) { this.integrationData = value; }

    @JsonProperty("isLazy")
    public Boolean getIsLazy() { return isLazy; }
    @JsonProperty("isLazy")
    public void setIsLazy(Boolean value) { this.isLazy = value; }

    @JsonProperty("israelCity")
    public IsraelCityUnion getIsraelCity() { return israelCity; }
    @JsonProperty("israelCity")
    public void setIsraelCity(IsraelCityUnion value) { this.israelCity = value; }

    @JsonProperty("isVIP")
    public Boolean getIsVIP() { return isVIP; }
    @JsonProperty("isVIP")
    public void setIsVIP(Boolean value) { this.isVIP = value; }

    @JsonProperty("kupatHolim")
    public KupatHolimUnion getKupatHolim() { return kupatHolim; }
    @JsonProperty("kupatHolim")
    public void setKupatHolim(KupatHolimUnion value) { this.kupatHolim = value; }

    @JsonProperty("language")
    public LanguageList getLanguage() { return language; }
    @JsonProperty("language")
    public void setLanguage(LanguageList value) { this.language = value; }

    @JsonProperty("lastCreatedAppointment")
    public Map<String, Object> getLastCreatedAppointment() { return lastCreatedAppointment; }
    @JsonProperty("lastCreatedAppointment")
    public void setLastCreatedAppointment(Map<String, Object> value) { this.lastCreatedAppointment = value; }

    @JsonProperty("lastVisitedAppointment")
    public Map<String, Object> getLastVisitedAppointment() { return lastVisitedAppointment; }
    @JsonProperty("lastVisitedAppointment")
    public void setLastVisitedAppointment(Map<String, Object> value) { this.lastVisitedAppointment = value; }

    @JsonProperty("lazyResolvedDate")
    public String getLazyResolvedDate() { return lazyResolvedDate; }
    @JsonProperty("lazyResolvedDate")
    public void setLazyResolvedDate(String value) { this.lazyResolvedDate = value; }

    @JsonProperty("locality")
    public String getLocality() { return locality; }
    @JsonProperty("locality")
    public void setLocality(String value) { this.locality = value; }

    @JsonProperty("loyaltyInfo")
    public LoyaltyInfo getLoyaltyInfo() { return loyaltyInfo; }
    @JsonProperty("loyaltyInfo")
    public void setLoyaltyInfo(LoyaltyInfo value) { this.loyaltyInfo = value; }

    @JsonProperty("middleName")
    public String getMiddleName() { return middleName; }
    @JsonProperty("middleName")
    public void setMiddleName(String value) { this.middleName = value; }

    @JsonProperty("name")
    public String getName() { return name; }
    @JsonProperty("name")
    public void setName(String value) { this.name = value; }

    @JsonProperty("passportDate")
    public String getPassportDate() { return passportDate; }
    @JsonProperty("passportDate")
    public void setPassportDate(String value) { this.passportDate = value; }

    @JsonProperty("passportId")
    public String getPassportID() { return passportID; }
    @JsonProperty("passportId")
    public void setPassportID(String value) { this.passportID = value; }

    @JsonProperty("passportIssued")
    public String getPassportIssued() { return passportIssued; }
    @JsonProperty("passportIssued")
    public void setPassportIssued(String value) { this.passportIssued = value; }

    @JsonProperty("passportSeries")
    public String getPassportSeries() { return passportSeries; }
    @JsonProperty("passportSeries")
    public void setPassportSeries(String value) { this.passportSeries = value; }

    @JsonProperty("phone")
    public List<FaxElement> getPhone() { return phone; }
    @JsonProperty("phone")
    public void setPhone(List<FaxElement> value) { this.phone = value; }

    @JsonProperty("receiveSmsAfterService")
    public Boolean getReceiveSMSAfterService() { return receiveSMSAfterService; }
    @JsonProperty("receiveSmsAfterService")
    public void setReceiveSMSAfterService(Boolean value) { this.receiveSMSAfterService = value; }

    @JsonProperty("sex")
    public Sex getSex() { return sex; }
    @JsonProperty("sex")
    public void setSex(Sex value) { this.sex = value; }

    @JsonProperty("skipMarketingNotifications")
    public Boolean getSkipMarketingNotifications() { return skipMarketingNotifications; }
    @JsonProperty("skipMarketingNotifications")
    public void setSkipMarketingNotifications(Boolean value) { this.skipMarketingNotifications = value; }

    @JsonProperty("skipNotifications")
    public Boolean getSkipNotifications() { return skipNotifications; }
    @JsonProperty("skipNotifications")
    public void setSkipNotifications(Boolean value) { this.skipNotifications = value; }

    @JsonProperty("snils")
    public String getSnils() { return snils; }
    @JsonProperty("snils")
    public void setSnils(String value) { this.snils = value; }

    @JsonProperty("statistics")
    public Statistics getStatistics() { return statistics; }
    @JsonProperty("statistics")
    public void setStatistics(Statistics value) { this.statistics = value; }

    @JsonProperty("status")
    public ResourceStatus getStatus() { return status; }
    @JsonProperty("status")
    public void setStatus(ResourceStatus value) { this.status = value; }

    @JsonProperty("surname")
    public String getSurname() { return surname; }
    @JsonProperty("surname")
    public void setSurname(String value) { this.surname = value; }

    @JsonProperty("taxiPark")
    public String getTaxiPark() { return taxiPark; }
    @JsonProperty("taxiPark")
    public void setTaxiPark(String value) { this.taxiPark = value; }

    @JsonProperty("taxiParkMemberCount")
    public TaxiParkMemberCountUnion getTaxiParkMemberCount() { return taxiParkMemberCount; }
    @JsonProperty("taxiParkMemberCount")
    public void setTaxiParkMemberCount(TaxiParkMemberCountUnion value) { this.taxiParkMemberCount = value; }

    @JsonProperty("twoFAUserID")
    public String getTwoFAUserID() { return twoFAUserID; }
    @JsonProperty("twoFAUserID")
    public void setTwoFAUserID(String value) { this.twoFAUserID = value; }

    @JsonProperty("updated")
    public String getUpdated() { return updated; }
    @JsonProperty("updated")
    public void setUpdated(String value) { this.updated = value; }

    @JsonProperty("workPlace")
    public String getWorkPlace() { return workPlace; }
    @JsonProperty("workPlace")
    public void setWorkPlace(String value) { this.workPlace = value; }
}
