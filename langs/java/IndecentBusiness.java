package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class IndecentBusiness {
    private Boolean active;
    private PurpleAdditionalSettings additionalSettings;
    private Boolean allowCategoryBooking;
    private FluffyBackofficeConfiguration businessBackofficeConfiguration;
    private PurpleBackofficeConfiguration backofficeConfiguration;
    private BackofficeType backofficeType;
    private List<PurpleCabinet> cabinets;
    private Boolean cabinetsEnabled;
    private PurpleCallbackWidgetConfiguration callbackWidgetConfiguration;
    private List<PurpleConsumable> consumables;
    private String createdOn;
    private List<String> defaultFilteredWorkers;
    private List<PurpleDepartment> departments;
    private List<Map<String, Object>> designs;
    private String extraID;
    private Boolean flatTaxonomyDisplay;
    private BusinessInfo generalInfo;
    private Group group;
    private String id;
    private Map<String, Object> integrationData;
    private PurpleMiniWidgetConfiguration miniWidgetConfiguration;
    private List<Object> mobileData;
    private List<Object> notifications;
    private Boolean stateLevelHolidaysNotWorking;
    private List<PurpleTaxonomiesComplex> taxonomiesComplex;
    private List<Map<String, Object>> taxonomyTreeCapacity;
    private PurpleTopServices topServices;
    private String vertical;
    private PurpleWidgetConfiguration widgetConfiguration;
    private String yandexFeedType;

    @JsonProperty("active")
    public Boolean getActive() { return active; }
    @JsonProperty("active")
    public void setActive(Boolean value) { this.active = value; }

    @JsonProperty("additionalSettings")
    public PurpleAdditionalSettings getAdditionalSettings() { return additionalSettings; }
    @JsonProperty("additionalSettings")
    public void setAdditionalSettings(PurpleAdditionalSettings value) { this.additionalSettings = value; }

    @JsonProperty("allowCategoryBooking")
    public Boolean getAllowCategoryBooking() { return allowCategoryBooking; }
    @JsonProperty("allowCategoryBooking")
    public void setAllowCategoryBooking(Boolean value) { this.allowCategoryBooking = value; }

    @JsonProperty("backoffice_configuration")
    public FluffyBackofficeConfiguration getBusinessBackofficeConfiguration() { return businessBackofficeConfiguration; }
    @JsonProperty("backoffice_configuration")
    public void setBusinessBackofficeConfiguration(FluffyBackofficeConfiguration value) { this.businessBackofficeConfiguration = value; }

    @JsonProperty("backofficeConfiguration")
    public PurpleBackofficeConfiguration getBackofficeConfiguration() { return backofficeConfiguration; }
    @JsonProperty("backofficeConfiguration")
    public void setBackofficeConfiguration(PurpleBackofficeConfiguration value) { this.backofficeConfiguration = value; }

    @JsonProperty("backofficeType")
    public BackofficeType getBackofficeType() { return backofficeType; }
    @JsonProperty("backofficeType")
    public void setBackofficeType(BackofficeType value) { this.backofficeType = value; }

    @JsonProperty("cabinets")
    public List<PurpleCabinet> getCabinets() { return cabinets; }
    @JsonProperty("cabinets")
    public void setCabinets(List<PurpleCabinet> value) { this.cabinets = value; }

    @JsonProperty("cabinetsEnabled")
    public Boolean getCabinetsEnabled() { return cabinetsEnabled; }
    @JsonProperty("cabinetsEnabled")
    public void setCabinetsEnabled(Boolean value) { this.cabinetsEnabled = value; }

    @JsonProperty("callback_widget_configuration")
    public PurpleCallbackWidgetConfiguration getCallbackWidgetConfiguration() { return callbackWidgetConfiguration; }
    @JsonProperty("callback_widget_configuration")
    public void setCallbackWidgetConfiguration(PurpleCallbackWidgetConfiguration value) { this.callbackWidgetConfiguration = value; }

    @JsonProperty("consumables")
    public List<PurpleConsumable> getConsumables() { return consumables; }
    @JsonProperty("consumables")
    public void setConsumables(List<PurpleConsumable> value) { this.consumables = value; }

    @JsonProperty("created_on")
    public String getCreatedOn() { return createdOn; }
    @JsonProperty("created_on")
    public void setCreatedOn(String value) { this.createdOn = value; }

    @JsonProperty("defaultFilteredWorkers")
    public List<String> getDefaultFilteredWorkers() { return defaultFilteredWorkers; }
    @JsonProperty("defaultFilteredWorkers")
    public void setDefaultFilteredWorkers(List<String> value) { this.defaultFilteredWorkers = value; }

    @JsonProperty("departments")
    public List<PurpleDepartment> getDepartments() { return departments; }
    @JsonProperty("departments")
    public void setDepartments(List<PurpleDepartment> value) { this.departments = value; }

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
    public PurpleMiniWidgetConfiguration getMiniWidgetConfiguration() { return miniWidgetConfiguration; }
    @JsonProperty("mini_widget_configuration")
    public void setMiniWidgetConfiguration(PurpleMiniWidgetConfiguration value) { this.miniWidgetConfiguration = value; }

    @JsonProperty("mobileData")
    public List<Object> getMobileData() { return mobileData; }
    @JsonProperty("mobileData")
    public void setMobileData(List<Object> value) { this.mobileData = value; }

    @JsonProperty("notifications")
    public List<Object> getNotifications() { return notifications; }
    @JsonProperty("notifications")
    public void setNotifications(List<Object> value) { this.notifications = value; }

    @JsonProperty("stateLevelHolidaysNotWorking")
    public Boolean getStateLevelHolidaysNotWorking() { return stateLevelHolidaysNotWorking; }
    @JsonProperty("stateLevelHolidaysNotWorking")
    public void setStateLevelHolidaysNotWorking(Boolean value) { this.stateLevelHolidaysNotWorking = value; }

    @JsonProperty("taxonomiesComplex")
    public List<PurpleTaxonomiesComplex> getTaxonomiesComplex() { return taxonomiesComplex; }
    @JsonProperty("taxonomiesComplex")
    public void setTaxonomiesComplex(List<PurpleTaxonomiesComplex> value) { this.taxonomiesComplex = value; }

    @JsonProperty("taxonomy_tree_capacity")
    public List<Map<String, Object>> getTaxonomyTreeCapacity() { return taxonomyTreeCapacity; }
    @JsonProperty("taxonomy_tree_capacity")
    public void setTaxonomyTreeCapacity(List<Map<String, Object>> value) { this.taxonomyTreeCapacity = value; }

    @JsonProperty("top_services")
    public PurpleTopServices getTopServices() { return topServices; }
    @JsonProperty("top_services")
    public void setTopServices(PurpleTopServices value) { this.topServices = value; }

    @JsonProperty("vertical")
    public String getVertical() { return vertical; }
    @JsonProperty("vertical")
    public void setVertical(String value) { this.vertical = value; }

    @JsonProperty("widget_configuration")
    public PurpleWidgetConfiguration getWidgetConfiguration() { return widgetConfiguration; }
    @JsonProperty("widget_configuration")
    public void setWidgetConfiguration(PurpleWidgetConfiguration value) { this.widgetConfiguration = value; }

    @JsonProperty("yandexFeedType")
    public String getYandexFeedType() { return yandexFeedType; }
    @JsonProperty("yandexFeedType")
    public void setYandexFeedType(String value) { this.yandexFeedType = value; }
}
