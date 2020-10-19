package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;
import java.util.List;
import java.util.Map;

/**
 * данные, передаваемые в ответ
 */
public class BusinessGetProfileByIDResponseResult {
    private Boolean active;
    private BusinessClass business;
    private Double freeSMS;
    private Double monthlyFreeSMS;
    private List<NetworkElement> networks;
    private List<Map<String, Object>> profiles;
    private ResultTopServices topServices;
    private Boolean useDefaultSMSTemplate;
    private YandexFeedType yandexFeedType;

    @JsonProperty("active")
    public Boolean getActive() { return active; }
    @JsonProperty("active")
    public void setActive(Boolean value) { this.active = value; }

    @JsonProperty("business")
    public BusinessClass getBusiness() { return business; }
    @JsonProperty("business")
    public void setBusiness(BusinessClass value) { this.business = value; }

    @JsonProperty("freeSms")
    public Double getFreeSMS() { return freeSMS; }
    @JsonProperty("freeSms")
    public void setFreeSMS(Double value) { this.freeSMS = value; }

    @JsonProperty("monthlyFreeSms")
    public Double getMonthlyFreeSMS() { return monthlyFreeSMS; }
    @JsonProperty("monthlyFreeSms")
    public void setMonthlyFreeSMS(Double value) { this.monthlyFreeSMS = value; }

    @JsonProperty("networks")
    public List<NetworkElement> getNetworks() { return networks; }
    @JsonProperty("networks")
    public void setNetworks(List<NetworkElement> value) { this.networks = value; }

    @JsonProperty("profiles")
    public List<Map<String, Object>> getProfiles() { return profiles; }
    @JsonProperty("profiles")
    public void setProfiles(List<Map<String, Object>> value) { this.profiles = value; }

    @JsonProperty("top_services")
    public ResultTopServices getTopServices() { return topServices; }
    @JsonProperty("top_services")
    public void setTopServices(ResultTopServices value) { this.topServices = value; }

    @JsonProperty("useDefaultSmsTemplate")
    public Boolean getUseDefaultSMSTemplate() { return useDefaultSMSTemplate; }
    @JsonProperty("useDefaultSmsTemplate")
    public void setUseDefaultSMSTemplate(Boolean value) { this.useDefaultSMSTemplate = value; }

    @JsonProperty("yandexFeedType")
    public YandexFeedType getYandexFeedType() { return yandexFeedType; }
    @JsonProperty("yandexFeedType")
    public void setYandexFeedType(YandexFeedType value) { this.yandexFeedType = value; }
}
