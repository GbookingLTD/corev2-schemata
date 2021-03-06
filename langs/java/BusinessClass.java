package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;
import java.time.OffsetDateTime;
import java.util.List;
import java.util.Map;

public class BusinessClass {
    private Boolean active;
    private BusinessAdditionalSettings additionalSettings;
    private Boolean allowCategoryBooking;
    private BusinessBackofficeConfigurationClass businessBackofficeConfiguration;
    private BusinessBackofficeConfiguration backofficeConfiguration;
    private BackofficeType backofficeType;
    private List<BusinessCabinet> cabinets;
    private Boolean cabinetsEnabled;
    private BusinessCallbackWidgetConfiguration callbackWidgetConfiguration;
    private List<BusinessConsumable> consumables;
    private OffsetDateTime createdOn;
    private List<String> defaultFilteredWorkers;
    private List<BusinessDepartment> departments;
    private List<Map<String, Object>> designs;
    private String extraID;
    private Boolean flatTaxonomyDisplay;
    private BusinessInfo generalInfo;
    private Group group;
    private String id;
    private Map<String, Object> integrationData;
    private Double maxFilterDateDuration;
    private BusinessMiniWidgetConfiguration miniWidgetConfiguration;
    private List<Object> mobileData;
    private List<Object> notifications;
    private List<Resource> resources;
    private Boolean stateLevelHolidaysNotWorking;
    private List<BusinessTaxonomy> taxonomies;
    private List<BusinessTaxonomiesComplex> taxonomiesComplex;
    private List<Map<String, Object>> taxonomyTreeCapacity;
    private BusinessTopServices topServices;
    private String vertical;
    private BusinessWidgetConfiguration widgetConfiguration;
    private String yandexFeedType;

    @JsonProperty("active")
    public Boolean getActive() { return active; }
    @JsonProperty("active")
    public void setActive(Boolean value) { this.active = value; }

    @JsonProperty("additionalSettings")
    public BusinessAdditionalSettings getAdditionalSettings() { return additionalSettings; }
    @JsonProperty("additionalSettings")
    public void setAdditionalSettings(BusinessAdditionalSettings value) { this.additionalSettings = value; }

    @JsonProperty("allowCategoryBooking")
    public Boolean getAllowCategoryBooking() { return allowCategoryBooking; }
    @JsonProperty("allowCategoryBooking")
    public void setAllowCategoryBooking(Boolean value) { this.allowCategoryBooking = value; }

    @JsonProperty("backoffice_configuration")
    public BusinessBackofficeConfigurationClass getBusinessBackofficeConfiguration() { return businessBackofficeConfiguration; }
    @JsonProperty("backoffice_configuration")
    public void setBusinessBackofficeConfiguration(BusinessBackofficeConfigurationClass value) { this.businessBackofficeConfiguration = value; }

    @JsonProperty("backofficeConfiguration")
    public BusinessBackofficeConfiguration getBackofficeConfiguration() { return backofficeConfiguration; }
    @JsonProperty("backofficeConfiguration")
    public void setBackofficeConfiguration(BusinessBackofficeConfiguration value) { this.backofficeConfiguration = value; }

    @JsonProperty("backofficeType")
    public BackofficeType getBackofficeType() { return backofficeType; }
    @JsonProperty("backofficeType")
    public void setBackofficeType(BackofficeType value) { this.backofficeType = value; }

    @JsonProperty("cabinets")
    public List<BusinessCabinet> getCabinets() { return cabinets; }
    @JsonProperty("cabinets")
    public void setCabinets(List<BusinessCabinet> value) { this.cabinets = value; }

    @JsonProperty("cabinetsEnabled")
    public Boolean getCabinetsEnabled() { return cabinetsEnabled; }
    @JsonProperty("cabinetsEnabled")
    public void setCabinetsEnabled(Boolean value) { this.cabinetsEnabled = value; }

    @JsonProperty("callback_widget_configuration")
    public BusinessCallbackWidgetConfiguration getCallbackWidgetConfiguration() { return callbackWidgetConfiguration; }
    @JsonProperty("callback_widget_configuration")
    public void setCallbackWidgetConfiguration(BusinessCallbackWidgetConfiguration value) { this.callbackWidgetConfiguration = value; }

    @JsonProperty("consumables")
    public List<BusinessConsumable> getConsumables() { return consumables; }
    @JsonProperty("consumables")
    public void setConsumables(List<BusinessConsumable> value) { this.consumables = value; }

    @JsonProperty("created_on")
    public OffsetDateTime getCreatedOn() { return createdOn; }
    @JsonProperty("created_on")
    public void setCreatedOn(OffsetDateTime value) { this.createdOn = value; }

    @JsonProperty("defaultFilteredWorkers")
    public List<String> getDefaultFilteredWorkers() { return defaultFilteredWorkers; }
    @JsonProperty("defaultFilteredWorkers")
    public void setDefaultFilteredWorkers(List<String> value) { this.defaultFilteredWorkers = value; }

    @JsonProperty("departments")
    public List<BusinessDepartment> getDepartments() { return departments; }
    @JsonProperty("departments")
    public void setDepartments(List<BusinessDepartment> value) { this.departments = value; }

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

    @JsonProperty("maxFilterDateDuration")
    public Double getMaxFilterDateDuration() { return maxFilterDateDuration; }
    @JsonProperty("maxFilterDateDuration")
    public void setMaxFilterDateDuration(Double value) { this.maxFilterDateDuration = value; }

    @JsonProperty("mini_widget_configuration")
    public BusinessMiniWidgetConfiguration getMiniWidgetConfiguration() { return miniWidgetConfiguration; }
    @JsonProperty("mini_widget_configuration")
    public void setMiniWidgetConfiguration(BusinessMiniWidgetConfiguration value) { this.miniWidgetConfiguration = value; }

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
    public List<BusinessTaxonomiesComplex> getTaxonomiesComplex() { return taxonomiesComplex; }
    @JsonProperty("taxonomiesComplex")
    public void setTaxonomiesComplex(List<BusinessTaxonomiesComplex> value) { this.taxonomiesComplex = value; }

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
    public BusinessWidgetConfiguration getWidgetConfiguration() { return widgetConfiguration; }
    @JsonProperty("widget_configuration")
    public void setWidgetConfiguration(BusinessWidgetConfiguration value) { this.widgetConfiguration = value; }

    @JsonProperty("yandexFeedType")
    public String getYandexFeedType() { return yandexFeedType; }
    @JsonProperty("yandexFeedType")
    public void setYandexFeedType(String value) { this.yandexFeedType = value; }
}
