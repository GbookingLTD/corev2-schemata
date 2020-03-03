package ru.gbooking.apiv2;

import java.util.*;

/**
 * данные, передаваемые в ответ
 */
public class BusinessGetProfileByIDResponseResult {
    private Boolean active;
    private Business business;
    private Double freeSMS;
    private Double monthlyFreeSMS;
    private List<Network> networks;
    private ResultTopServices topServices;
    private Boolean useDefaultSMSTemplate;
    private YandexFeedType yandexFeedType;

    public Boolean getActive() { return active; }
    public void setActive(Boolean value) { this.active = value; }

    public Business getBusiness() { return business; }
    public void setBusiness(Business value) { this.business = value; }

    public Double getFreeSMS() { return freeSMS; }
    public void setFreeSMS(Double value) { this.freeSMS = value; }

    public Double getMonthlyFreeSMS() { return monthlyFreeSMS; }
    public void setMonthlyFreeSMS(Double value) { this.monthlyFreeSMS = value; }

    public List<Network> getNetworks() { return networks; }
    public void setNetworks(List<Network> value) { this.networks = value; }

    public ResultTopServices getTopServices() { return topServices; }
    public void setTopServices(ResultTopServices value) { this.topServices = value; }

    public Boolean getUseDefaultSMSTemplate() { return useDefaultSMSTemplate; }
    public void setUseDefaultSMSTemplate(Boolean value) { this.useDefaultSMSTemplate = value; }

    public YandexFeedType getYandexFeedType() { return yandexFeedType; }
    public void setYandexFeedType(YandexFeedType value) { this.yandexFeedType = value; }
}
