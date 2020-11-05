package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;
import java.time.OffsetDateTime;
import java.util.List;
import java.util.Map;

public class InfoClass {
    private Boolean active;
    private Double activeResourceCount;
    private Double activeTaxonomyCount;
    private InfoAdditionalSettings additionalSettings;
    private Boolean allowCategoryBooking;
    private InfoBackofficeConfigurationClass businessBackofficeConfiguration;
    private InfoBackofficeConfiguration backofficeConfiguration;
    private BackofficeType backofficeType;
    private List<InfoCabinet> cabinets;
    private Boolean cabinetsEnabled;
    private InfoCallbackWidgetConfiguration callbackWidgetConfiguration;
    private List<InfoConsumable> consumables;
    private OffsetDateTime createdOn;
    private List<String> defaultFilteredWorkers;
    private List<InfoDepartment> departments;
    private List<Map<String, Object>> designs;
    private String extraID;
    private Boolean flatTaxonomyDisplay;
    private BusinessInfo generalInfo;
    private Group group;
    private String id;
    private Map<String, Object> integrationData;
    private InfoMiniWidgetConfiguration miniWidgetConfiguration;
    private List<Object> mobileData;
    private List<Object> notifications;
    private List<Resource> resources;
    private Boolean stateLevelHolidaysNotWorking;
    private List<InfoTaxonomy> taxonomies;
    private List<InfoTaxonomiesComplex> taxonomiesComplex;
    private List<Map<String, Object>> taxonomyTreeCapacity;
    private InfoTopServices topServices;
    private String vertical;
    private InfoWidgetConfiguration widgetConfiguration;
    private String yandexFeedType;

    @JsonProperty("active")
    public Boolean getActive() { return active; }
    @JsonProperty("active")
    public void setActive(Boolean value) { this.active = value; }

    /**
     * колличество активных рабоников, возвращается при вызове через get_network_data при
     * передаче ключа работника или услуги
     */
    @JsonProperty("activeResourceCount")
    public Double getActiveResourceCount() { return activeResourceCount; }
    @JsonProperty("activeResourceCount")
    public void setActiveResourceCount(Double value) { this.activeResourceCount = value; }

    /**
     * колличество активных услуг, возвращается при вызове через get_network_data при передаче
     * ключа работника или услуги
     */
    @JsonProperty("activeTaxonomyCount")
    public Double getActiveTaxonomyCount() { return activeTaxonomyCount; }
    @JsonProperty("activeTaxonomyCount")
    public void setActiveTaxonomyCount(Double value) { this.activeTaxonomyCount = value; }

    @JsonProperty("additionalSettings")
    public InfoAdditionalSettings getAdditionalSettings() { return additionalSettings; }
    @JsonProperty("additionalSettings")
    public void setAdditionalSettings(InfoAdditionalSettings value) { this.additionalSettings = value; }

    @JsonProperty("allowCategoryBooking")
    public Boolean getAllowCategoryBooking() { return allowCategoryBooking; }
    @JsonProperty("allowCategoryBooking")
    public void setAllowCategoryBooking(Boolean value) { this.allowCategoryBooking = value; }

    @JsonProperty("backoffice_configuration")
    public InfoBackofficeConfigurationClass getBusinessBackofficeConfiguration() { return businessBackofficeConfiguration; }
    @JsonProperty("backoffice_configuration")
    public void setBusinessBackofficeConfiguration(InfoBackofficeConfigurationClass value) { this.businessBackofficeConfiguration = value; }

    @JsonProperty("backofficeConfiguration")
    public InfoBackofficeConfiguration getBackofficeConfiguration() { return backofficeConfiguration; }
    @JsonProperty("backofficeConfiguration")
    public void setBackofficeConfiguration(InfoBackofficeConfiguration value) { this.backofficeConfiguration = value; }

    @JsonProperty("backofficeType")
    public BackofficeType getBackofficeType() { return backofficeType; }
    @JsonProperty("backofficeType")
    public void setBackofficeType(BackofficeType value) { this.backofficeType = value; }

    @JsonProperty("cabinets")
    public List<InfoCabinet> getCabinets() { return cabinets; }
    @JsonProperty("cabinets")
    public void setCabinets(List<InfoCabinet> value) { this.cabinets = value; }

    @JsonProperty("cabinetsEnabled")
    public Boolean getCabinetsEnabled() { return cabinetsEnabled; }
    @JsonProperty("cabinetsEnabled")
    public void setCabinetsEnabled(Boolean value) { this.cabinetsEnabled = value; }

    @JsonProperty("callback_widget_configuration")
    public InfoCallbackWidgetConfiguration getCallbackWidgetConfiguration() { return callbackWidgetConfiguration; }
    @JsonProperty("callback_widget_configuration")
    public void setCallbackWidgetConfiguration(InfoCallbackWidgetConfiguration value) { this.callbackWidgetConfiguration = value; }

    @JsonProperty("consumables")
    public List<InfoConsumable> getConsumables() { return consumables; }
    @JsonProperty("consumables")
    public void setConsumables(List<InfoConsumable> value) { this.consumables = value; }

    @JsonProperty("created_on")
    public OffsetDateTime getCreatedOn() { return createdOn; }
    @JsonProperty("created_on")
    public void setCreatedOn(OffsetDateTime value) { this.createdOn = value; }

    @JsonProperty("defaultFilteredWorkers")
    public List<String> getDefaultFilteredWorkers() { return defaultFilteredWorkers; }
    @JsonProperty("defaultFilteredWorkers")
    public void setDefaultFilteredWorkers(List<String> value) { this.defaultFilteredWorkers = value; }

    @JsonProperty("departments")
    public List<InfoDepartment> getDepartments() { return departments; }
    @JsonProperty("departments")
    public void setDepartments(List<InfoDepartment> value) { this.departments = value; }

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
    public InfoMiniWidgetConfiguration getMiniWidgetConfiguration() { return miniWidgetConfiguration; }
    @JsonProperty("mini_widget_configuration")
    public void setMiniWidgetConfiguration(InfoMiniWidgetConfiguration value) { this.miniWidgetConfiguration = value; }

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
    public List<InfoTaxonomy> getTaxonomies() { return taxonomies; }
    @JsonProperty("taxonomies")
    public void setTaxonomies(List<InfoTaxonomy> value) { this.taxonomies = value; }

    @JsonProperty("taxonomiesComplex")
    public List<InfoTaxonomiesComplex> getTaxonomiesComplex() { return taxonomiesComplex; }
    @JsonProperty("taxonomiesComplex")
    public void setTaxonomiesComplex(List<InfoTaxonomiesComplex> value) { this.taxonomiesComplex = value; }

    @JsonProperty("taxonomy_tree_capacity")
    public List<Map<String, Object>> getTaxonomyTreeCapacity() { return taxonomyTreeCapacity; }
    @JsonProperty("taxonomy_tree_capacity")
    public void setTaxonomyTreeCapacity(List<Map<String, Object>> value) { this.taxonomyTreeCapacity = value; }

    @JsonProperty("top_services")
    public InfoTopServices getTopServices() { return topServices; }
    @JsonProperty("top_services")
    public void setTopServices(InfoTopServices value) { this.topServices = value; }

    @JsonProperty("vertical")
    public String getVertical() { return vertical; }
    @JsonProperty("vertical")
    public void setVertical(String value) { this.vertical = value; }

    @JsonProperty("widget_configuration")
    public InfoWidgetConfiguration getWidgetConfiguration() { return widgetConfiguration; }
    @JsonProperty("widget_configuration")
    public void setWidgetConfiguration(InfoWidgetConfiguration value) { this.widgetConfiguration = value; }

    @JsonProperty("yandexFeedType")
    public String getYandexFeedType() { return yandexFeedType; }
    @JsonProperty("yandexFeedType")
    public void setYandexFeedType(String value) { this.yandexFeedType = value; }
}
