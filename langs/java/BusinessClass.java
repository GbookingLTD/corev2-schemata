package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

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

    @JsonProperty("active")
    public Boolean getActive() { return active; }
    @JsonProperty("active")
    public void setActive(Boolean value) { this.active = value; }

    @JsonProperty("additionalSettings")
    public AdditionalSettings getAdditionalSettings() { return additionalSettings; }
    @JsonProperty("additionalSettings")
    public void setAdditionalSettings(AdditionalSettings value) { this.additionalSettings = value; }

    @JsonProperty("allowCategoryBooking")
    public Boolean getAllowCategoryBooking() { return allowCategoryBooking; }
    @JsonProperty("allowCategoryBooking")
    public void setAllowCategoryBooking(Boolean value) { this.allowCategoryBooking = value; }

    @JsonProperty("backoffice_configuration")
    public BusinessBackofficeConfiguration getBusinessBackofficeConfiguration() { return businessBackofficeConfiguration; }
    @JsonProperty("backoffice_configuration")
    public void setBusinessBackofficeConfiguration(BusinessBackofficeConfiguration value) { this.businessBackofficeConfiguration = value; }

    @JsonProperty("backofficeConfiguration")
    public BackofficeConfigurationClass getBackofficeConfiguration() { return backofficeConfiguration; }
    @JsonProperty("backofficeConfiguration")
    public void setBackofficeConfiguration(BackofficeConfigurationClass value) { this.backofficeConfiguration = value; }

    @JsonProperty("backofficeType")
    public BackofficeType getBackofficeType() { return backofficeType; }
    @JsonProperty("backofficeType")
    public void setBackofficeType(BackofficeType value) { this.backofficeType = value; }

    @JsonProperty("cabinets")
    public List<Cabinet> getCabinets() { return cabinets; }
    @JsonProperty("cabinets")
    public void setCabinets(List<Cabinet> value) { this.cabinets = value; }

    @JsonProperty("cabinetsEnabled")
    public Boolean getCabinetsEnabled() { return cabinetsEnabled; }
    @JsonProperty("cabinetsEnabled")
    public void setCabinetsEnabled(Boolean value) { this.cabinetsEnabled = value; }

    @JsonProperty("callback_widget_configuration")
    public CallbackWidgetConfiguration getCallbackWidgetConfiguration() { return callbackWidgetConfiguration; }
    @JsonProperty("callback_widget_configuration")
    public void setCallbackWidgetConfiguration(CallbackWidgetConfiguration value) { this.callbackWidgetConfiguration = value; }

    @JsonProperty("consumables")
    public List<Consumable> getConsumables() { return consumables; }
    @JsonProperty("consumables")
    public void setConsumables(List<Consumable> value) { this.consumables = value; }

    @JsonProperty("created_on")
    public String getCreatedOn() { return createdOn; }
    @JsonProperty("created_on")
    public void setCreatedOn(String value) { this.createdOn = value; }

    @JsonProperty("defaultFilteredWorkers")
    public List<String> getDefaultFilteredWorkers() { return defaultFilteredWorkers; }
    @JsonProperty("defaultFilteredWorkers")
    public void setDefaultFilteredWorkers(List<String> value) { this.defaultFilteredWorkers = value; }

    @JsonProperty("departments")
    public List<Department> getDepartments() { return departments; }
    @JsonProperty("departments")
    public void setDepartments(List<Department> value) { this.departments = value; }

    @JsonProperty("designs")
    public List<Map<String, Object>> getDesigns() { return designs; }
    @JsonProperty("designs")
    public void setDesigns(List<Map<String, Object>> value) { this.designs = value; }

    @JsonProperty("extraID")
    public String getExtraID() { return extraID; }
    @JsonProperty("extraID")
    public void setExtraID(String value) { this.extraID = value; }

    @JsonProperty("flatTaxonomyDisplay")
    public Boolean getFlatTaxonomyDisplay() { return flatTaxonomyDisplay; }
    @JsonProperty("flatTaxonomyDisplay")
    public void setFlatTaxonomyDisplay(Boolean value) { this.flatTaxonomyDisplay = value; }

    @JsonProperty("general_info")
    public BusinessInfo getGeneralInfo() { return generalInfo; }
    @JsonProperty("general_info")
    public void setGeneralInfo(BusinessInfo value) { this.generalInfo = value; }

    @JsonProperty("group")
    public Group getGroup() { return group; }
    @JsonProperty("group")
    public void setGroup(Group value) { this.group = value; }

    @JsonProperty("id")
    public String getID() { return id; }
    @JsonProperty("id")
    public void setID(String value) { this.id = value; }

    @JsonProperty("integration_data")
    public Map<String, Object> getIntegrationData() { return integrationData; }
    @JsonProperty("integration_data")
    public void setIntegrationData(Map<String, Object> value) { this.integrationData = value; }

    @JsonProperty("mini_widget_configuration")
    public MiniWidgetConfiguration getMiniWidgetConfiguration() { return miniWidgetConfiguration; }
    @JsonProperty("mini_widget_configuration")
    public void setMiniWidgetConfiguration(MiniWidgetConfiguration value) { this.miniWidgetConfiguration = value; }

    @JsonProperty("mobileData")
    public List<Object> getMobileData() { return mobileData; }
    @JsonProperty("mobileData")
    public void setMobileData(List<Object> value) { this.mobileData = value; }

    @JsonProperty("notifications")
    public List<Object> getNotifications() { return notifications; }
    @JsonProperty("notifications")
    public void setNotifications(List<Object> value) { this.notifications = value; }

    @JsonProperty("resources")
    public List<Resource> getResources() { return resources; }
    @JsonProperty("resources")
    public void setResources(List<Resource> value) { this.resources = value; }

    @JsonProperty("stateLevelHolidaysNotWorking")
    public Boolean getStateLevelHolidaysNotWorking() { return stateLevelHolidaysNotWorking; }
    @JsonProperty("stateLevelHolidaysNotWorking")
    public void setStateLevelHolidaysNotWorking(Boolean value) { this.stateLevelHolidaysNotWorking = value; }

    @JsonProperty("taxonomies")
    public List<BusinessTaxonomy> getTaxonomies() { return taxonomies; }
    @JsonProperty("taxonomies")
    public void setTaxonomies(List<BusinessTaxonomy> value) { this.taxonomies = value; }

    @JsonProperty("taxonomiesComplex")
    public List<TaxonomiesComplex> getTaxonomiesComplex() { return taxonomiesComplex; }
    @JsonProperty("taxonomiesComplex")
    public void setTaxonomiesComplex(List<TaxonomiesComplex> value) { this.taxonomiesComplex = value; }

    @JsonProperty("taxonomy_tree_capacity")
    public List<Map<String, Object>> getTaxonomyTreeCapacity() { return taxonomyTreeCapacity; }
    @JsonProperty("taxonomy_tree_capacity")
    public void setTaxonomyTreeCapacity(List<Map<String, Object>> value) { this.taxonomyTreeCapacity = value; }

    @JsonProperty("top_services")
    public BusinessTopServices getTopServices() { return topServices; }
    @JsonProperty("top_services")
    public void setTopServices(BusinessTopServices value) { this.topServices = value; }

    @JsonProperty("vertical")
    public String getVertical() { return vertical; }
    @JsonProperty("vertical")
    public void setVertical(String value) { this.vertical = value; }

    @JsonProperty("widget_configuration")
    public WidgetConfiguration getWidgetConfiguration() { return widgetConfiguration; }
    @JsonProperty("widget_configuration")
    public void setWidgetConfiguration(WidgetConfiguration value) { this.widgetConfiguration = value; }

    @JsonProperty("yandexFeedType")
    public String getYandexFeedType() { return yandexFeedType; }
    @JsonProperty("yandexFeedType")
    public void setYandexFeedType(String value) { this.yandexFeedType = value; }
}
