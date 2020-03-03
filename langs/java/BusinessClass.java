package ru.gbooking.apiv2;

import java.util.*;

public class BusinessClass {
    private Boolean active;
    private AdditionalSettings additionalSettings;
    private Boolean allowCategoryBooking;
    private BusinessBackofficeConfiguration businessBackofficeConfiguration;
    private BackofficeConfigurationClass backofficeConfiguration;
    private BackofficeType backofficeType;
    private List<Cabinet> cabinets;
    private Boolean cabinetsEnabled;
    private CallbackWidgetConfiguration callbackWidgetConfiguration;
    private List<Consumable> consumables;
    private String createdOn;
    private List<String> defaultFilteredWorkers;
    private List<Department> departments;
    private List<Map<String, Object>> designs;
    private String extraID;
    private Boolean flatTaxonomyDisplay;
    private BusinessInfo generalInfo;
    private Group group;
    private String id;
    private Map<String, Object> integrationData;
    private MiniWidgetConfiguration miniWidgetConfiguration;
    private List<Object> mobileData;
    private List<Object> notifications;
    private List<Resource> resources;
    private Boolean stateLevelHolidaysNotWorking;
    private List<BusinessTaxonomy> taxonomies;
    private List<TaxonomiesComplex> taxonomiesComplex;
    private List<Map<String, Object>> taxonomyTreeCapacity;
    private BusinessTopServices topServices;
    private String vertical;
    private WidgetConfiguration widgetConfiguration;
    private String yandexFeedType;

    public Boolean getActive() { return active; }
    public void setActive(Boolean value) { this.active = value; }

    public AdditionalSettings getAdditionalSettings() { return additionalSettings; }
    public void setAdditionalSettings(AdditionalSettings value) { this.additionalSettings = value; }

    public Boolean getAllowCategoryBooking() { return allowCategoryBooking; }
    public void setAllowCategoryBooking(Boolean value) { this.allowCategoryBooking = value; }

    public BusinessBackofficeConfiguration getBusinessBackofficeConfiguration() { return businessBackofficeConfiguration; }
    public void setBusinessBackofficeConfiguration(BusinessBackofficeConfiguration value) { this.businessBackofficeConfiguration = value; }

    public BackofficeConfigurationClass getBackofficeConfiguration() { return backofficeConfiguration; }
    public void setBackofficeConfiguration(BackofficeConfigurationClass value) { this.backofficeConfiguration = value; }

    public BackofficeType getBackofficeType() { return backofficeType; }
    public void setBackofficeType(BackofficeType value) { this.backofficeType = value; }

    public List<Cabinet> getCabinets() { return cabinets; }
    public void setCabinets(List<Cabinet> value) { this.cabinets = value; }

    public Boolean getCabinetsEnabled() { return cabinetsEnabled; }
    public void setCabinetsEnabled(Boolean value) { this.cabinetsEnabled = value; }

    public CallbackWidgetConfiguration getCallbackWidgetConfiguration() { return callbackWidgetConfiguration; }
    public void setCallbackWidgetConfiguration(CallbackWidgetConfiguration value) { this.callbackWidgetConfiguration = value; }

    public List<Consumable> getConsumables() { return consumables; }
    public void setConsumables(List<Consumable> value) { this.consumables = value; }

    public String getCreatedOn() { return createdOn; }
    public void setCreatedOn(String value) { this.createdOn = value; }

    public List<String> getDefaultFilteredWorkers() { return defaultFilteredWorkers; }
    public void setDefaultFilteredWorkers(List<String> value) { this.defaultFilteredWorkers = value; }

    public List<Department> getDepartments() { return departments; }
    public void setDepartments(List<Department> value) { this.departments = value; }

    public List<Map<String, Object>> getDesigns() { return designs; }
    public void setDesigns(List<Map<String, Object>> value) { this.designs = value; }

    public String getExtraID() { return extraID; }
    public void setExtraID(String value) { this.extraID = value; }

    public Boolean getFlatTaxonomyDisplay() { return flatTaxonomyDisplay; }
    public void setFlatTaxonomyDisplay(Boolean value) { this.flatTaxonomyDisplay = value; }

    public BusinessInfo getGeneralInfo() { return generalInfo; }
    public void setGeneralInfo(BusinessInfo value) { this.generalInfo = value; }

    public Group getGroup() { return group; }
    public void setGroup(Group value) { this.group = value; }

    public String getID() { return id; }
    public void setID(String value) { this.id = value; }

    public Map<String, Object> getIntegrationData() { return integrationData; }
    public void setIntegrationData(Map<String, Object> value) { this.integrationData = value; }

    public MiniWidgetConfiguration getMiniWidgetConfiguration() { return miniWidgetConfiguration; }
    public void setMiniWidgetConfiguration(MiniWidgetConfiguration value) { this.miniWidgetConfiguration = value; }

    public List<Object> getMobileData() { return mobileData; }
    public void setMobileData(List<Object> value) { this.mobileData = value; }

    public List<Object> getNotifications() { return notifications; }
    public void setNotifications(List<Object> value) { this.notifications = value; }

    public List<Resource> getResources() { return resources; }
    public void setResources(List<Resource> value) { this.resources = value; }

    public Boolean getStateLevelHolidaysNotWorking() { return stateLevelHolidaysNotWorking; }
    public void setStateLevelHolidaysNotWorking(Boolean value) { this.stateLevelHolidaysNotWorking = value; }

    public List<BusinessTaxonomy> getTaxonomies() { return taxonomies; }
    public void setTaxonomies(List<BusinessTaxonomy> value) { this.taxonomies = value; }

    public List<TaxonomiesComplex> getTaxonomiesComplex() { return taxonomiesComplex; }
    public void setTaxonomiesComplex(List<TaxonomiesComplex> value) { this.taxonomiesComplex = value; }

    public List<Map<String, Object>> getTaxonomyTreeCapacity() { return taxonomyTreeCapacity; }
    public void setTaxonomyTreeCapacity(List<Map<String, Object>> value) { this.taxonomyTreeCapacity = value; }

    public BusinessTopServices getTopServices() { return topServices; }
    public void setTopServices(BusinessTopServices value) { this.topServices = value; }

    public String getVertical() { return vertical; }
    public void setVertical(String value) { this.vertical = value; }

    public WidgetConfiguration getWidgetConfiguration() { return widgetConfiguration; }
    public void setWidgetConfiguration(WidgetConfiguration value) { this.widgetConfiguration = value; }

    public String getYandexFeedType() { return yandexFeedType; }
    public void setYandexFeedType(String value) { this.yandexFeedType = value; }
}
