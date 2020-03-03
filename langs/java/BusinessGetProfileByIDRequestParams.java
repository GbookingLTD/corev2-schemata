package ru.gbooking.apiv2;

import java.util.*;

/**
 * параметры запроса
 */
public class BusinessGetProfileByIDRequestParams {
    private PurpleBusiness business;
    private Boolean desktopDiscounts;
    private Boolean onlyActiveWorkers;
    private Boolean showInactiveWorkers;
    private PurpleTimeFrameDate showcaseBusinessID;
    private Boolean skipWorkerSorting;
    private Boolean withBilling;
    private Boolean withBop;
    private Boolean withCampaigns;
    private Boolean withDiscounts;
    private String withDiscountsFrom;
    private String withDiscountsTo;
    private Boolean withNetworks;
    private Boolean withTaxonomyShowcase;
    private WorkerSortingType workerSortingType;

    public PurpleBusiness getBusiness() { return business; }
    public void setBusiness(PurpleBusiness value) { this.business = value; }

    /**
     * если указано true - меняет формат представления discounts
     */
    public Boolean getDesktopDiscounts() { return desktopDiscounts; }
    public void setDesktopDiscounts(Boolean value) { this.desktopDiscounts = value; }

    /**
     * если указано true - возвращает только активных работников (status == 'INACTIVE')
     */
    public Boolean getOnlyActiveWorkers() { return onlyActiveWorkers; }
    public void setOnlyActiveWorkers(Boolean value) { this.onlyActiveWorkers = value; }

    /**
     * если указано true - возвращает всех работников в том числе и неактивных (status ==
     * 'INACTIVE')
     */
    public Boolean getShowInactiveWorkers() { return showInactiveWorkers; }
    public void setShowInactiveWorkers(Boolean value) { this.showInactiveWorkers = value; }

    /**
     * идентификатор витрины (передаётся вместе с with_taxonomy_showcase)
     */
    public PurpleTimeFrameDate getShowcaseBusinessID() { return showcaseBusinessID; }
    public void setShowcaseBusinessID(PurpleTimeFrameDate value) { this.showcaseBusinessID = value; }

    /**
     * если указано true - не приминяет сортировку работников
     */
    public Boolean getSkipWorkerSorting() { return skipWorkerSorting; }
    public void setSkipWorkerSorting(Boolean value) { this.skipWorkerSorting = value; }

    /**
     * если указано true - возвращает историю биллинга в поле billing (недоступно для роли guest)
     */
    public Boolean getWithBilling() { return withBilling; }
    public void setWithBilling(Boolean value) { this.withBilling = value; }

    /**
     * если указано true - возвращает список операций, доступных в БекОфисе в поле profiles
     * (недоступно для роли guest)
     */
    public Boolean getWithBop() { return withBop; }
    public void setWithBop(Boolean value) { this.withBop = value; }

    /**
     * если указано true - возвращает кампании скидочных купонов в поле campaigns
     */
    public Boolean getWithCampaigns() { return withCampaigns; }
    public void setWithCampaigns(Boolean value) { this.withCampaigns = value; }

    /**
     * если указано true - возвращает список скидочных акций в поле discounts
     */
    public Boolean getWithDiscounts() { return withDiscounts; }
    public void setWithDiscounts(Boolean value) { this.withDiscounts = value; }

    /**
     * дата начала расписания, для которого нужно получить скидочные акции
     */
    public String getWithDiscountsFrom() { return withDiscountsFrom; }
    public void setWithDiscountsFrom(String value) { this.withDiscountsFrom = value; }

    /**
     * дата окончания расписания, для которого нужно получить скидочные акции
     */
    public String getWithDiscountsTo() { return withDiscountsTo; }
    public void setWithDiscountsTo(String value) { this.withDiscountsTo = value; }

    /**
     * если указано true - возвращает информацию о других филиалах сети в поле networks
     */
    public Boolean getWithNetworks() { return withNetworks; }
    public void setWithNetworks(Boolean value) { this.withNetworks = value; }

    /**
     * если указано true - заполняет идентификаторы таксономий витрины showcaseTaxonomyID для
     * каждой таксономии (недоступно для роли guest)
     */
    public Boolean getWithTaxonomyShowcase() { return withTaxonomyShowcase; }
    public void setWithTaxonomyShowcase(Boolean value) { this.withTaxonomyShowcase = value; }

    /**
     * тип сортировки работника
     */
    public WorkerSortingType getWorkerSortingType() { return workerSortingType; }
    public void setWorkerSortingType(WorkerSortingType value) { this.workerSortingType = value; }
}
