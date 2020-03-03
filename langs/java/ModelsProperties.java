package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class ModelsProperties {
    private HammerfestPonies name;
    private BeijingPigeon shortName;
    private BeijingPigeon value;
    private Repeats type;
    private BeijingPigeon requiredField;
    private BackofficeType country;
    private BeijingPigeon propertiesZipCode;
    private BeijingPigeon locality;
    private BeijingPigeon propertiesLocalityType;
    private BeijingPigeon street;
    private BeijingPigeon propertiesStreetType;
    private BeijingPigeon number;
    private BeijingPigeon propertiesAdminArea;
    private BeijingPigeon propertiesAdminAreaType;
    private BeijingPigeon propertiesSubAdminArea;
    private BeijingPigeon propertiesSubAdminAreaType;
    private BeijingPigeon propertiesSubLocality;
    private BeijingPigeon propertiesSubLocalityType;
    private BeijingPigeon corps;
    private BeijingPigeon building;
    private BeijingPigeon possesion;
    private BeijingPigeon kilometer;
    private BeijingPigeon address;
    private BeijingPigeon propertiesHouseAdd;
    private BeijingPigeon longitude;
    private BeijingPigeon latitude;
    private BeijingPigeon propertiesAddressAdd;
    private BeijingPigeon office;
    private Cabinets metroStations;
    private BeijingPigeon way;
    private BackofficeType group;
    private BeijingPigeon zipCode;
    private BeijingPigeon localityType;
    private BeijingPigeon streetType;
    private BeijingPigeon adminArea;
    private BeijingPigeon adminAreaType;
    private BeijingPigeon subAdminArea;
    private BeijingPigeon subAdminAreaType;
    private BeijingPigeon subLocality;
    private BeijingPigeon subLocalityType;
    private BeijingPigeon houseAdd;
    private BeijingPigeon addressAdd;
    private HammerfestPonies id;
    private BeijingPigeon extraID;
    private CreatedOn createdOn;
    private GeneralInfo generalInfo;
    private Taxonomies taxonomies;
    private Cabinets resources;
    private DefaultFilteredWorkers designs;
    private ChiangMaiGoose stateLevelHolidaysNotWorking;
    private BeijingPigeon notifications;
    private BeijingPigeon vertical;
    private BeijingPigeon flatTaxonomyDisplay;
    private BeijingPigeon allowCategoryBooking;
    private BeijingPigeon cabinetsEnabled;
    private DefaultFilteredWorkers taxonomyTreeCapacity;
    private Cabinets consumables;
    private Cabinets departments;
    private Cabinets cabinets;
    private DefaultFilteredWorkers defaultFilteredWorkers;
    private BeijingPigeon integrationData;
    private BeijingPigeon yandexFeedType;
    private TopServices topServices;
    private BeijingPigeon mobileData;
    private HammerfestPonies active;
    private BackofficeType backofficeType;
    private BackofficeConfigurationClass backofficeConfiguration;
    private AdditionalSettings additionalSettings;
    private BackofficeConfigurationClass widgetConfiguration;
    private MiniWidgetConfiguration miniWidgetConfiguration;
    private CallbackWidgetConfiguration callbackWidgetConfiguration;
    private TaxonomiesComplex taxonomiesComplex;
    private PropertiesBackofficeConfiguration propertiesBackofficeConfiguration;
    private HammerfestPonies surname;
    private BeijingPigeon propertiesMiddleName;
    private Birthday birthday;
    private GeneralInfo phone;
    private AdditionalExtraID email;
    private FromSMS fromSMS;
    private BackofficeType sex;
    private Birthday creatorProfileID;
    private Birthday creatorProfileName;
    private Birthday driverLicense;
    private Birthday taxiPark;
    private Birthday taxiParkMemberCount;
    private CreatedOn start;
    private Repeats repeats;
    private TrapaniSnowLeopard weeklyRepeat;
    private ChiangMaiGoose unlimWeeklyRepeat;
    private BackofficeType daysOfWeek;
    private Slots slots;
    private BeijingPigeon countryCode;
    private BeijingPigeon areaCode;
    private HammerfestPonies revisionVersion;
    private HammerfestPonies rating;
    private HammerfestPonies capacity;
    private IconURL iconURL;
    private HammerfestPonies originBusinessID;
    private AdditionalExtraID originTaxonomies;
    private OriginGeneralInfo originGeneralInfo;
    private HammerfestPonies nickname;
    private HammerfestPonies middleName;
    private HammerfestPonies loaned;
    private HammerfestPonies loanedTo;
    private HammerfestPonies loanedFrom;
    private HammerfestPonies description;
    private HammerfestPonies profession;
    private HammerfestPonies extraDescription;
    private HammerfestPonies extraLink;
    private HammerfestPonies propertiesExtraID;
    private HammerfestPonies siteID;
    private AdditionalExtraID additionalExtraID;
    private HammerfestPonies extraMediaID;
    private HammerfestPonies departmentID;
    private HammerfestPonies workPlace;
    private HammerfestPonies order;
    private HammerfestPonies color;
    private GeneralInfo profile;
    private TaxonomyChildren taxonomyLevels;
    private TaxonomyChildren taxonomyChildren;
    private HammerfestPonies level;
    private HammerfestPonies perk;
    private HammerfestPonies smsEnabled;
    private HammerfestPonies emailEnabled;
    private HammerfestPonies displayInWidget;
    private Exceptions manualChanges;
    private EvenOddTimetableClass timetable;
    private EvenOddTimetableClass evenOddTimetable;
    private Status status;
    private Exceptions image;
    private EvenOddTimetableClass location;
    private Exceptions exceptions;
    private BeijingPigeon userData;
    private Exceptions scheduleIsEmpty;
    private IconURL orderWeight;
    private DefaultFilteredWorkers readonlyTaxonomies;
    private ChiangMaiGoose displayInSchedule;
    private CreatedOn lastSU;
    private CreatedOn experience;
    private BeijingPigeon degree;
    private BackofficeType socialNetwork;
    private BeijingPigeon handle;
    private BeijingPigeon url;
    private Week week;

    @JsonProperty("name")
    public HammerfestPonies getName() { return name; }
    @JsonProperty("name")
    public void setName(HammerfestPonies value) { this.name = value; }

    @JsonProperty("shortName")
    public BeijingPigeon getShortName() { return shortName; }
    @JsonProperty("shortName")
    public void setShortName(BeijingPigeon value) { this.shortName = value; }

    @JsonProperty("value")
    public BeijingPigeon getValue() { return value; }
    @JsonProperty("value")
    public void setValue(BeijingPigeon value) { this.value = value; }

    @JsonProperty("type")
    public Repeats getType() { return type; }
    @JsonProperty("type")
    public void setType(Repeats value) { this.type = value; }

    @JsonProperty("requiredField")
    public BeijingPigeon getRequiredField() { return requiredField; }
    @JsonProperty("requiredField")
    public void setRequiredField(BeijingPigeon value) { this.requiredField = value; }

    @JsonProperty("country")
    public BackofficeType getCountry() { return country; }
    @JsonProperty("country")
    public void setCountry(BackofficeType value) { this.country = value; }

    @JsonProperty("zip_code")
    public BeijingPigeon getPropertiesZipCode() { return propertiesZipCode; }
    @JsonProperty("zip_code")
    public void setPropertiesZipCode(BeijingPigeon value) { this.propertiesZipCode = value; }

    @JsonProperty("locality")
    public BeijingPigeon getLocality() { return locality; }
    @JsonProperty("locality")
    public void setLocality(BeijingPigeon value) { this.locality = value; }

    @JsonProperty("locality_type")
    public BeijingPigeon getPropertiesLocalityType() { return propertiesLocalityType; }
    @JsonProperty("locality_type")
    public void setPropertiesLocalityType(BeijingPigeon value) { this.propertiesLocalityType = value; }

    @JsonProperty("street")
    public BeijingPigeon getStreet() { return street; }
    @JsonProperty("street")
    public void setStreet(BeijingPigeon value) { this.street = value; }

    @JsonProperty("street_type")
    public BeijingPigeon getPropertiesStreetType() { return propertiesStreetType; }
    @JsonProperty("street_type")
    public void setPropertiesStreetType(BeijingPigeon value) { this.propertiesStreetType = value; }

    @JsonProperty("number")
    public BeijingPigeon getNumber() { return number; }
    @JsonProperty("number")
    public void setNumber(BeijingPigeon value) { this.number = value; }

    @JsonProperty("admin_area")
    public BeijingPigeon getPropertiesAdminArea() { return propertiesAdminArea; }
    @JsonProperty("admin_area")
    public void setPropertiesAdminArea(BeijingPigeon value) { this.propertiesAdminArea = value; }

    @JsonProperty("admin_area_type")
    public BeijingPigeon getPropertiesAdminAreaType() { return propertiesAdminAreaType; }
    @JsonProperty("admin_area_type")
    public void setPropertiesAdminAreaType(BeijingPigeon value) { this.propertiesAdminAreaType = value; }

    @JsonProperty("sub_admin_area")
    public BeijingPigeon getPropertiesSubAdminArea() { return propertiesSubAdminArea; }
    @JsonProperty("sub_admin_area")
    public void setPropertiesSubAdminArea(BeijingPigeon value) { this.propertiesSubAdminArea = value; }

    @JsonProperty("sub_admin_area_type")
    public BeijingPigeon getPropertiesSubAdminAreaType() { return propertiesSubAdminAreaType; }
    @JsonProperty("sub_admin_area_type")
    public void setPropertiesSubAdminAreaType(BeijingPigeon value) { this.propertiesSubAdminAreaType = value; }

    @JsonProperty("sub_locality")
    public BeijingPigeon getPropertiesSubLocality() { return propertiesSubLocality; }
    @JsonProperty("sub_locality")
    public void setPropertiesSubLocality(BeijingPigeon value) { this.propertiesSubLocality = value; }

    @JsonProperty("sub_locality_type")
    public BeijingPigeon getPropertiesSubLocalityType() { return propertiesSubLocalityType; }
    @JsonProperty("sub_locality_type")
    public void setPropertiesSubLocalityType(BeijingPigeon value) { this.propertiesSubLocalityType = value; }

    @JsonProperty("corps")
    public BeijingPigeon getCorps() { return corps; }
    @JsonProperty("corps")
    public void setCorps(BeijingPigeon value) { this.corps = value; }

    @JsonProperty("building")
    public BeijingPigeon getBuilding() { return building; }
    @JsonProperty("building")
    public void setBuilding(BeijingPigeon value) { this.building = value; }

    @JsonProperty("possesion")
    public BeijingPigeon getPossesion() { return possesion; }
    @JsonProperty("possesion")
    public void setPossesion(BeijingPigeon value) { this.possesion = value; }

    @JsonProperty("kilometer")
    public BeijingPigeon getKilometer() { return kilometer; }
    @JsonProperty("kilometer")
    public void setKilometer(BeijingPigeon value) { this.kilometer = value; }

    @JsonProperty("address")
    public BeijingPigeon getAddress() { return address; }
    @JsonProperty("address")
    public void setAddress(BeijingPigeon value) { this.address = value; }

    @JsonProperty("house_add")
    public BeijingPigeon getPropertiesHouseAdd() { return propertiesHouseAdd; }
    @JsonProperty("house_add")
    public void setPropertiesHouseAdd(BeijingPigeon value) { this.propertiesHouseAdd = value; }

    @JsonProperty("longitude")
    public BeijingPigeon getLongitude() { return longitude; }
    @JsonProperty("longitude")
    public void setLongitude(BeijingPigeon value) { this.longitude = value; }

    @JsonProperty("latitude")
    public BeijingPigeon getLatitude() { return latitude; }
    @JsonProperty("latitude")
    public void setLatitude(BeijingPigeon value) { this.latitude = value; }

    @JsonProperty("address_add")
    public BeijingPigeon getPropertiesAddressAdd() { return propertiesAddressAdd; }
    @JsonProperty("address_add")
    public void setPropertiesAddressAdd(BeijingPigeon value) { this.propertiesAddressAdd = value; }

    @JsonProperty("office")
    public BeijingPigeon getOffice() { return office; }
    @JsonProperty("office")
    public void setOffice(BeijingPigeon value) { this.office = value; }

    @JsonProperty("metroStations")
    public Cabinets getMetroStations() { return metroStations; }
    @JsonProperty("metroStations")
    public void setMetroStations(Cabinets value) { this.metroStations = value; }

    @JsonProperty("way")
    public BeijingPigeon getWay() { return way; }
    @JsonProperty("way")
    public void setWay(BeijingPigeon value) { this.way = value; }

    @JsonProperty("group")
    public BackofficeType getGroup() { return group; }
    @JsonProperty("group")
    public void setGroup(BackofficeType value) { this.group = value; }

    @JsonProperty("zipCode")
    public BeijingPigeon getZipCode() { return zipCode; }
    @JsonProperty("zipCode")
    public void setZipCode(BeijingPigeon value) { this.zipCode = value; }

    @JsonProperty("localityType")
    public BeijingPigeon getLocalityType() { return localityType; }
    @JsonProperty("localityType")
    public void setLocalityType(BeijingPigeon value) { this.localityType = value; }

    @JsonProperty("streetType")
    public BeijingPigeon getStreetType() { return streetType; }
    @JsonProperty("streetType")
    public void setStreetType(BeijingPigeon value) { this.streetType = value; }

    @JsonProperty("adminArea")
    public BeijingPigeon getAdminArea() { return adminArea; }
    @JsonProperty("adminArea")
    public void setAdminArea(BeijingPigeon value) { this.adminArea = value; }

    @JsonProperty("adminAreaType")
    public BeijingPigeon getAdminAreaType() { return adminAreaType; }
    @JsonProperty("adminAreaType")
    public void setAdminAreaType(BeijingPigeon value) { this.adminAreaType = value; }

    @JsonProperty("subAdminArea")
    public BeijingPigeon getSubAdminArea() { return subAdminArea; }
    @JsonProperty("subAdminArea")
    public void setSubAdminArea(BeijingPigeon value) { this.subAdminArea = value; }

    @JsonProperty("subAdminAreaType")
    public BeijingPigeon getSubAdminAreaType() { return subAdminAreaType; }
    @JsonProperty("subAdminAreaType")
    public void setSubAdminAreaType(BeijingPigeon value) { this.subAdminAreaType = value; }

    @JsonProperty("subLocality")
    public BeijingPigeon getSubLocality() { return subLocality; }
    @JsonProperty("subLocality")
    public void setSubLocality(BeijingPigeon value) { this.subLocality = value; }

    @JsonProperty("subLocalityType")
    public BeijingPigeon getSubLocalityType() { return subLocalityType; }
    @JsonProperty("subLocalityType")
    public void setSubLocalityType(BeijingPigeon value) { this.subLocalityType = value; }

    @JsonProperty("houseAdd")
    public BeijingPigeon getHouseAdd() { return houseAdd; }
    @JsonProperty("houseAdd")
    public void setHouseAdd(BeijingPigeon value) { this.houseAdd = value; }

    @JsonProperty("addressAdd")
    public BeijingPigeon getAddressAdd() { return addressAdd; }
    @JsonProperty("addressAdd")
    public void setAddressAdd(BeijingPigeon value) { this.addressAdd = value; }

    @JsonProperty("id")
    public HammerfestPonies getID() { return id; }
    @JsonProperty("id")
    public void setID(HammerfestPonies value) { this.id = value; }

    @JsonProperty("extraID")
    public BeijingPigeon getExtraID() { return extraID; }
    @JsonProperty("extraID")
    public void setExtraID(BeijingPigeon value) { this.extraID = value; }

    @JsonProperty("created_on")
    public CreatedOn getCreatedOn() { return createdOn; }
    @JsonProperty("created_on")
    public void setCreatedOn(CreatedOn value) { this.createdOn = value; }

    @JsonProperty("general_info")
    public GeneralInfo getGeneralInfo() { return generalInfo; }
    @JsonProperty("general_info")
    public void setGeneralInfo(GeneralInfo value) { this.generalInfo = value; }

    @JsonProperty("taxonomies")
    public Taxonomies getTaxonomies() { return taxonomies; }
    @JsonProperty("taxonomies")
    public void setTaxonomies(Taxonomies value) { this.taxonomies = value; }

    @JsonProperty("resources")
    public Cabinets getResources() { return resources; }
    @JsonProperty("resources")
    public void setResources(Cabinets value) { this.resources = value; }

    @JsonProperty("designs")
    public DefaultFilteredWorkers getDesigns() { return designs; }
    @JsonProperty("designs")
    public void setDesigns(DefaultFilteredWorkers value) { this.designs = value; }

    @JsonProperty("stateLevelHolidaysNotWorking")
    public ChiangMaiGoose getStateLevelHolidaysNotWorking() { return stateLevelHolidaysNotWorking; }
    @JsonProperty("stateLevelHolidaysNotWorking")
    public void setStateLevelHolidaysNotWorking(ChiangMaiGoose value) { this.stateLevelHolidaysNotWorking = value; }

    @JsonProperty("notifications")
    public BeijingPigeon getNotifications() { return notifications; }
    @JsonProperty("notifications")
    public void setNotifications(BeijingPigeon value) { this.notifications = value; }

    @JsonProperty("vertical")
    public BeijingPigeon getVertical() { return vertical; }
    @JsonProperty("vertical")
    public void setVertical(BeijingPigeon value) { this.vertical = value; }

    @JsonProperty("flatTaxonomyDisplay")
    public BeijingPigeon getFlatTaxonomyDisplay() { return flatTaxonomyDisplay; }
    @JsonProperty("flatTaxonomyDisplay")
    public void setFlatTaxonomyDisplay(BeijingPigeon value) { this.flatTaxonomyDisplay = value; }

    @JsonProperty("allowCategoryBooking")
    public BeijingPigeon getAllowCategoryBooking() { return allowCategoryBooking; }
    @JsonProperty("allowCategoryBooking")
    public void setAllowCategoryBooking(BeijingPigeon value) { this.allowCategoryBooking = value; }

    @JsonProperty("cabinetsEnabled")
    public BeijingPigeon getCabinetsEnabled() { return cabinetsEnabled; }
    @JsonProperty("cabinetsEnabled")
    public void setCabinetsEnabled(BeijingPigeon value) { this.cabinetsEnabled = value; }

    @JsonProperty("taxonomy_tree_capacity")
    public DefaultFilteredWorkers getTaxonomyTreeCapacity() { return taxonomyTreeCapacity; }
    @JsonProperty("taxonomy_tree_capacity")
    public void setTaxonomyTreeCapacity(DefaultFilteredWorkers value) { this.taxonomyTreeCapacity = value; }

    @JsonProperty("consumables")
    public Cabinets getConsumables() { return consumables; }
    @JsonProperty("consumables")
    public void setConsumables(Cabinets value) { this.consumables = value; }

    @JsonProperty("departments")
    public Cabinets getDepartments() { return departments; }
    @JsonProperty("departments")
    public void setDepartments(Cabinets value) { this.departments = value; }

    @JsonProperty("cabinets")
    public Cabinets getCabinets() { return cabinets; }
    @JsonProperty("cabinets")
    public void setCabinets(Cabinets value) { this.cabinets = value; }

    @JsonProperty("defaultFilteredWorkers")
    public DefaultFilteredWorkers getDefaultFilteredWorkers() { return defaultFilteredWorkers; }
    @JsonProperty("defaultFilteredWorkers")
    public void setDefaultFilteredWorkers(DefaultFilteredWorkers value) { this.defaultFilteredWorkers = value; }

    @JsonProperty("integration_data")
    public BeijingPigeon getIntegrationData() { return integrationData; }
    @JsonProperty("integration_data")
    public void setIntegrationData(BeijingPigeon value) { this.integrationData = value; }

    @JsonProperty("yandexFeedType")
    public BeijingPigeon getYandexFeedType() { return yandexFeedType; }
    @JsonProperty("yandexFeedType")
    public void setYandexFeedType(BeijingPigeon value) { this.yandexFeedType = value; }

    @JsonProperty("top_services")
    public TopServices getTopServices() { return topServices; }
    @JsonProperty("top_services")
    public void setTopServices(TopServices value) { this.topServices = value; }

    @JsonProperty("mobileData")
    public BeijingPigeon getMobileData() { return mobileData; }
    @JsonProperty("mobileData")
    public void setMobileData(BeijingPigeon value) { this.mobileData = value; }

    @JsonProperty("active")
    public HammerfestPonies getActive() { return active; }
    @JsonProperty("active")
    public void setActive(HammerfestPonies value) { this.active = value; }

    @JsonProperty("backofficeType")
    public BackofficeType getBackofficeType() { return backofficeType; }
    @JsonProperty("backofficeType")
    public void setBackofficeType(BackofficeType value) { this.backofficeType = value; }

    @JsonProperty("backofficeConfiguration")
    public BackofficeConfigurationClass getBackofficeConfiguration() { return backofficeConfiguration; }
    @JsonProperty("backofficeConfiguration")
    public void setBackofficeConfiguration(BackofficeConfigurationClass value) { this.backofficeConfiguration = value; }

    @JsonProperty("additionalSettings")
    public AdditionalSettings getAdditionalSettings() { return additionalSettings; }
    @JsonProperty("additionalSettings")
    public void setAdditionalSettings(AdditionalSettings value) { this.additionalSettings = value; }

    @JsonProperty("widget_configuration")
    public BackofficeConfigurationClass getWidgetConfiguration() { return widgetConfiguration; }
    @JsonProperty("widget_configuration")
    public void setWidgetConfiguration(BackofficeConfigurationClass value) { this.widgetConfiguration = value; }

    @JsonProperty("mini_widget_configuration")
    public MiniWidgetConfiguration getMiniWidgetConfiguration() { return miniWidgetConfiguration; }
    @JsonProperty("mini_widget_configuration")
    public void setMiniWidgetConfiguration(MiniWidgetConfiguration value) { this.miniWidgetConfiguration = value; }

    @JsonProperty("callback_widget_configuration")
    public CallbackWidgetConfiguration getCallbackWidgetConfiguration() { return callbackWidgetConfiguration; }
    @JsonProperty("callback_widget_configuration")
    public void setCallbackWidgetConfiguration(CallbackWidgetConfiguration value) { this.callbackWidgetConfiguration = value; }

    @JsonProperty("taxonomiesComplex")
    public TaxonomiesComplex getTaxonomiesComplex() { return taxonomiesComplex; }
    @JsonProperty("taxonomiesComplex")
    public void setTaxonomiesComplex(TaxonomiesComplex value) { this.taxonomiesComplex = value; }

    @JsonProperty("backoffice_configuration")
    public PropertiesBackofficeConfiguration getPropertiesBackofficeConfiguration() { return propertiesBackofficeConfiguration; }
    @JsonProperty("backoffice_configuration")
    public void setPropertiesBackofficeConfiguration(PropertiesBackofficeConfiguration value) { this.propertiesBackofficeConfiguration = value; }

    @JsonProperty("surname")
    public HammerfestPonies getSurname() { return surname; }
    @JsonProperty("surname")
    public void setSurname(HammerfestPonies value) { this.surname = value; }

    @JsonProperty("middle_name")
    public BeijingPigeon getPropertiesMiddleName() { return propertiesMiddleName; }
    @JsonProperty("middle_name")
    public void setPropertiesMiddleName(BeijingPigeon value) { this.propertiesMiddleName = value; }

    @JsonProperty("birthday")
    public Birthday getBirthday() { return birthday; }
    @JsonProperty("birthday")
    public void setBirthday(Birthday value) { this.birthday = value; }

    @JsonProperty("phone")
    public GeneralInfo getPhone() { return phone; }
    @JsonProperty("phone")
    public void setPhone(GeneralInfo value) { this.phone = value; }

    @JsonProperty("email")
    public AdditionalExtraID getEmail() { return email; }
    @JsonProperty("email")
    public void setEmail(AdditionalExtraID value) { this.email = value; }

    @JsonProperty("fromSms")
    public FromSMS getFromSMS() { return fromSMS; }
    @JsonProperty("fromSms")
    public void setFromSMS(FromSMS value) { this.fromSMS = value; }

    @JsonProperty("sex")
    public BackofficeType getSex() { return sex; }
    @JsonProperty("sex")
    public void setSex(BackofficeType value) { this.sex = value; }

    @JsonProperty("creatorProfileID")
    public Birthday getCreatorProfileID() { return creatorProfileID; }
    @JsonProperty("creatorProfileID")
    public void setCreatorProfileID(Birthday value) { this.creatorProfileID = value; }

    @JsonProperty("creatorProfileName")
    public Birthday getCreatorProfileName() { return creatorProfileName; }
    @JsonProperty("creatorProfileName")
    public void setCreatorProfileName(Birthday value) { this.creatorProfileName = value; }

    @JsonProperty("driverLicense")
    public Birthday getDriverLicense() { return driverLicense; }
    @JsonProperty("driverLicense")
    public void setDriverLicense(Birthday value) { this.driverLicense = value; }

    @JsonProperty("taxiPark")
    public Birthday getTaxiPark() { return taxiPark; }
    @JsonProperty("taxiPark")
    public void setTaxiPark(Birthday value) { this.taxiPark = value; }

    @JsonProperty("taxiParkMemberCount")
    public Birthday getTaxiParkMemberCount() { return taxiParkMemberCount; }
    @JsonProperty("taxiParkMemberCount")
    public void setTaxiParkMemberCount(Birthday value) { this.taxiParkMemberCount = value; }

    @JsonProperty("start")
    public CreatedOn getStart() { return start; }
    @JsonProperty("start")
    public void setStart(CreatedOn value) { this.start = value; }

    @JsonProperty("repeats")
    public Repeats getRepeats() { return repeats; }
    @JsonProperty("repeats")
    public void setRepeats(Repeats value) { this.repeats = value; }

    @JsonProperty("weeklyRepeat")
    public TrapaniSnowLeopard getWeeklyRepeat() { return weeklyRepeat; }
    @JsonProperty("weeklyRepeat")
    public void setWeeklyRepeat(TrapaniSnowLeopard value) { this.weeklyRepeat = value; }

    @JsonProperty("unlimWeeklyRepeat")
    public ChiangMaiGoose getUnlimWeeklyRepeat() { return unlimWeeklyRepeat; }
    @JsonProperty("unlimWeeklyRepeat")
    public void setUnlimWeeklyRepeat(ChiangMaiGoose value) { this.unlimWeeklyRepeat = value; }

    @JsonProperty("daysOfWeek")
    public BackofficeType getDaysOfWeek() { return daysOfWeek; }
    @JsonProperty("daysOfWeek")
    public void setDaysOfWeek(BackofficeType value) { this.daysOfWeek = value; }

    @JsonProperty("slots")
    public Slots getSlots() { return slots; }
    @JsonProperty("slots")
    public void setSlots(Slots value) { this.slots = value; }

    @JsonProperty("country_code")
    public BeijingPigeon getCountryCode() { return countryCode; }
    @JsonProperty("country_code")
    public void setCountryCode(BeijingPigeon value) { this.countryCode = value; }

    @JsonProperty("area_code")
    public BeijingPigeon getAreaCode() { return areaCode; }
    @JsonProperty("area_code")
    public void setAreaCode(BeijingPigeon value) { this.areaCode = value; }

    @JsonProperty("revisionVersion")
    public HammerfestPonies getRevisionVersion() { return revisionVersion; }
    @JsonProperty("revisionVersion")
    public void setRevisionVersion(HammerfestPonies value) { this.revisionVersion = value; }

    @JsonProperty("rating")
    public HammerfestPonies getRating() { return rating; }
    @JsonProperty("rating")
    public void setRating(HammerfestPonies value) { this.rating = value; }

    @JsonProperty("capacity")
    public HammerfestPonies getCapacity() { return capacity; }
    @JsonProperty("capacity")
    public void setCapacity(HammerfestPonies value) { this.capacity = value; }

    @JsonProperty("icon_url")
    public IconURL getIconURL() { return iconURL; }
    @JsonProperty("icon_url")
    public void setIconURL(IconURL value) { this.iconURL = value; }

    @JsonProperty("originBusinessID")
    public HammerfestPonies getOriginBusinessID() { return originBusinessID; }
    @JsonProperty("originBusinessID")
    public void setOriginBusinessID(HammerfestPonies value) { this.originBusinessID = value; }

    @JsonProperty("originTaxonomies")
    public AdditionalExtraID getOriginTaxonomies() { return originTaxonomies; }
    @JsonProperty("originTaxonomies")
    public void setOriginTaxonomies(AdditionalExtraID value) { this.originTaxonomies = value; }

    @JsonProperty("origin_general_info")
    public OriginGeneralInfo getOriginGeneralInfo() { return originGeneralInfo; }
    @JsonProperty("origin_general_info")
    public void setOriginGeneralInfo(OriginGeneralInfo value) { this.originGeneralInfo = value; }

    @JsonProperty("nickname")
    public HammerfestPonies getNickname() { return nickname; }
    @JsonProperty("nickname")
    public void setNickname(HammerfestPonies value) { this.nickname = value; }

    @JsonProperty("middleName")
    public HammerfestPonies getMiddleName() { return middleName; }
    @JsonProperty("middleName")
    public void setMiddleName(HammerfestPonies value) { this.middleName = value; }

    @JsonProperty("loaned")
    public HammerfestPonies getLoaned() { return loaned; }
    @JsonProperty("loaned")
    public void setLoaned(HammerfestPonies value) { this.loaned = value; }

    @JsonProperty("loanedTo")
    public HammerfestPonies getLoanedTo() { return loanedTo; }
    @JsonProperty("loanedTo")
    public void setLoanedTo(HammerfestPonies value) { this.loanedTo = value; }

    @JsonProperty("loanedFrom")
    public HammerfestPonies getLoanedFrom() { return loanedFrom; }
    @JsonProperty("loanedFrom")
    public void setLoanedFrom(HammerfestPonies value) { this.loanedFrom = value; }

    @JsonProperty("description")
    public HammerfestPonies getDescription() { return description; }
    @JsonProperty("description")
    public void setDescription(HammerfestPonies value) { this.description = value; }

    @JsonProperty("profession")
    public HammerfestPonies getProfession() { return profession; }
    @JsonProperty("profession")
    public void setProfession(HammerfestPonies value) { this.profession = value; }

    @JsonProperty("extraDescription")
    public HammerfestPonies getExtraDescription() { return extraDescription; }
    @JsonProperty("extraDescription")
    public void setExtraDescription(HammerfestPonies value) { this.extraDescription = value; }

    @JsonProperty("extraLink")
    public HammerfestPonies getExtraLink() { return extraLink; }
    @JsonProperty("extraLink")
    public void setExtraLink(HammerfestPonies value) { this.extraLink = value; }

    @JsonProperty("extraId")
    public HammerfestPonies getPropertiesExtraID() { return propertiesExtraID; }
    @JsonProperty("extraId")
    public void setPropertiesExtraID(HammerfestPonies value) { this.propertiesExtraID = value; }

    @JsonProperty("siteId")
    public HammerfestPonies getSiteID() { return siteID; }
    @JsonProperty("siteId")
    public void setSiteID(HammerfestPonies value) { this.siteID = value; }

    @JsonProperty("additionalExtraId")
    public AdditionalExtraID getAdditionalExtraID() { return additionalExtraID; }
    @JsonProperty("additionalExtraId")
    public void setAdditionalExtraID(AdditionalExtraID value) { this.additionalExtraID = value; }

    @JsonProperty("extraMediaId")
    public HammerfestPonies getExtraMediaID() { return extraMediaID; }
    @JsonProperty("extraMediaId")
    public void setExtraMediaID(HammerfestPonies value) { this.extraMediaID = value; }

    @JsonProperty("departmentId")
    public HammerfestPonies getDepartmentID() { return departmentID; }
    @JsonProperty("departmentId")
    public void setDepartmentID(HammerfestPonies value) { this.departmentID = value; }

    @JsonProperty("workPlace")
    public HammerfestPonies getWorkPlace() { return workPlace; }
    @JsonProperty("workPlace")
    public void setWorkPlace(HammerfestPonies value) { this.workPlace = value; }

    @JsonProperty("order")
    public HammerfestPonies getOrder() { return order; }
    @JsonProperty("order")
    public void setOrder(HammerfestPonies value) { this.order = value; }

    @JsonProperty("color")
    public HammerfestPonies getColor() { return color; }
    @JsonProperty("color")
    public void setColor(HammerfestPonies value) { this.color = value; }

    @JsonProperty("profile")
    public GeneralInfo getProfile() { return profile; }
    @JsonProperty("profile")
    public void setProfile(GeneralInfo value) { this.profile = value; }

    @JsonProperty("taxonomyLevels")
    public TaxonomyChildren getTaxonomyLevels() { return taxonomyLevels; }
    @JsonProperty("taxonomyLevels")
    public void setTaxonomyLevels(TaxonomyChildren value) { this.taxonomyLevels = value; }

    @JsonProperty("taxonomyChildren")
    public TaxonomyChildren getTaxonomyChildren() { return taxonomyChildren; }
    @JsonProperty("taxonomyChildren")
    public void setTaxonomyChildren(TaxonomyChildren value) { this.taxonomyChildren = value; }

    @JsonProperty("level")
    public HammerfestPonies getLevel() { return level; }
    @JsonProperty("level")
    public void setLevel(HammerfestPonies value) { this.level = value; }

    @JsonProperty("perk")
    public HammerfestPonies getPerk() { return perk; }
    @JsonProperty("perk")
    public void setPerk(HammerfestPonies value) { this.perk = value; }

    @JsonProperty("smsEnabled")
    public HammerfestPonies getSMSEnabled() { return smsEnabled; }
    @JsonProperty("smsEnabled")
    public void setSMSEnabled(HammerfestPonies value) { this.smsEnabled = value; }

    @JsonProperty("emailEnabled")
    public HammerfestPonies getEmailEnabled() { return emailEnabled; }
    @JsonProperty("emailEnabled")
    public void setEmailEnabled(HammerfestPonies value) { this.emailEnabled = value; }

    @JsonProperty("displayInWidget")
    public HammerfestPonies getDisplayInWidget() { return displayInWidget; }
    @JsonProperty("displayInWidget")
    public void setDisplayInWidget(HammerfestPonies value) { this.displayInWidget = value; }

    @JsonProperty("manualChanges")
    public Exceptions getManualChanges() { return manualChanges; }
    @JsonProperty("manualChanges")
    public void setManualChanges(Exceptions value) { this.manualChanges = value; }

    @JsonProperty("timetable")
    public EvenOddTimetableClass getTimetable() { return timetable; }
    @JsonProperty("timetable")
    public void setTimetable(EvenOddTimetableClass value) { this.timetable = value; }

    @JsonProperty("evenOddTimetable")
    public EvenOddTimetableClass getEvenOddTimetable() { return evenOddTimetable; }
    @JsonProperty("evenOddTimetable")
    public void setEvenOddTimetable(EvenOddTimetableClass value) { this.evenOddTimetable = value; }

    @JsonProperty("status")
    public Status getStatus() { return status; }
    @JsonProperty("status")
    public void setStatus(Status value) { this.status = value; }

    @JsonProperty("image")
    public Exceptions getImage() { return image; }
    @JsonProperty("image")
    public void setImage(Exceptions value) { this.image = value; }

    @JsonProperty("location")
    public EvenOddTimetableClass getLocation() { return location; }
    @JsonProperty("location")
    public void setLocation(EvenOddTimetableClass value) { this.location = value; }

    @JsonProperty("exceptions")
    public Exceptions getExceptions() { return exceptions; }
    @JsonProperty("exceptions")
    public void setExceptions(Exceptions value) { this.exceptions = value; }

    @JsonProperty("userData")
    public BeijingPigeon getUserData() { return userData; }
    @JsonProperty("userData")
    public void setUserData(BeijingPigeon value) { this.userData = value; }

    @JsonProperty("scheduleIsEmpty")
    public Exceptions getScheduleIsEmpty() { return scheduleIsEmpty; }
    @JsonProperty("scheduleIsEmpty")
    public void setScheduleIsEmpty(Exceptions value) { this.scheduleIsEmpty = value; }

    @JsonProperty("orderWeight")
    public IconURL getOrderWeight() { return orderWeight; }
    @JsonProperty("orderWeight")
    public void setOrderWeight(IconURL value) { this.orderWeight = value; }

    @JsonProperty("readonlyTaxonomies")
    public DefaultFilteredWorkers getReadonlyTaxonomies() { return readonlyTaxonomies; }
    @JsonProperty("readonlyTaxonomies")
    public void setReadonlyTaxonomies(DefaultFilteredWorkers value) { this.readonlyTaxonomies = value; }

    @JsonProperty("displayInSchedule")
    public ChiangMaiGoose getDisplayInSchedule() { return displayInSchedule; }
    @JsonProperty("displayInSchedule")
    public void setDisplayInSchedule(ChiangMaiGoose value) { this.displayInSchedule = value; }

    @JsonProperty("lastSU")
    public CreatedOn getLastSU() { return lastSU; }
    @JsonProperty("lastSU")
    public void setLastSU(CreatedOn value) { this.lastSU = value; }

    @JsonProperty("experience")
    public CreatedOn getExperience() { return experience; }
    @JsonProperty("experience")
    public void setExperience(CreatedOn value) { this.experience = value; }

    @JsonProperty("degree")
    public BeijingPigeon getDegree() { return degree; }
    @JsonProperty("degree")
    public void setDegree(BeijingPigeon value) { this.degree = value; }

    @JsonProperty("social_network")
    public BackofficeType getSocialNetwork() { return socialNetwork; }
    @JsonProperty("social_network")
    public void setSocialNetwork(BackofficeType value) { this.socialNetwork = value; }

    @JsonProperty("handle")
    public BeijingPigeon getHandle() { return handle; }
    @JsonProperty("handle")
    public void setHandle(BeijingPigeon value) { this.handle = value; }

    @JsonProperty("url")
    public BeijingPigeon getURL() { return url; }
    @JsonProperty("url")
    public void setURL(BeijingPigeon value) { this.url = value; }

    @JsonProperty("week")
    public Week getWeek() { return week; }
    @JsonProperty("week")
    public void setWeek(Week value) { this.week = value; }
}
