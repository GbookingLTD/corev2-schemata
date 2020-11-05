package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;
import java.time.OffsetDateTime;

/**
 * параметры запроса business.get_profile_by_id
 */
public class BusinessGetProfileByIDRequestParams {
    private FriskyBusiness business;
    private Boolean desktopDiscounts;
    private Boolean onlyActiveWorkers;
    private Boolean showInactiveWorkers;
    private TaxiParkMemberCountUnion showcaseBusinessID;
    private Boolean skipWorkerSorting;
    private Boolean useOptimizedCache;
    private Boolean withBilling;
    private Boolean withBop;
    private Boolean withCampaigns;
    private Boolean withDiscounts;
    private OffsetDateTime withDiscountsFrom;
    private OffsetDateTime withDiscountsTo;
    private Boolean withNetworks;
    private Boolean withTaxonomyShowcase;
    private WorkerSortingType workerSortingType;

    @JsonProperty("business")
    public FriskyBusiness getBusiness() { return business; }
    @JsonProperty("business")
    public void setBusiness(FriskyBusiness value) { this.business = value; }

    /**
     * если указано true - меняет формат представления discounts
     */
    @JsonProperty("desktop_discounts")
    public Boolean getDesktopDiscounts() { return desktopDiscounts; }
    @JsonProperty("desktop_discounts")
    public void setDesktopDiscounts(Boolean value) { this.desktopDiscounts = value; }

    /**
     * если указано true - возвращает только активных работников (status == 'INACTIVE')
     */
    @JsonProperty("only_active_workers")
    public Boolean getOnlyActiveWorkers() { return onlyActiveWorkers; }
    @JsonProperty("only_active_workers")
    public void setOnlyActiveWorkers(Boolean value) { this.onlyActiveWorkers = value; }

    /**
     * если указано true - возвращает всех работников в том числе и неактивных (status ==
     * 'INACTIVE')
     */
    @JsonProperty("show_inactive_workers")
    public Boolean getShowInactiveWorkers() { return showInactiveWorkers; }
    @JsonProperty("show_inactive_workers")
    public void setShowInactiveWorkers(Boolean value) { this.showInactiveWorkers = value; }

    /**
     * идентификатор витрины (передаётся вместе с with_taxonomy_showcase)
     */
    @JsonProperty("showcase_business_id")
    public TaxiParkMemberCountUnion getShowcaseBusinessID() { return showcaseBusinessID; }
    @JsonProperty("showcase_business_id")
    public void setShowcaseBusinessID(TaxiParkMemberCountUnion value) { this.showcaseBusinessID = value; }

    /**
     * если указано true - не приминяет сортировку работников
     */
    @JsonProperty("skip_worker_sorting")
    public Boolean getSkipWorkerSorting() { return skipWorkerSorting; }
    @JsonProperty("skip_worker_sorting")
    public void setSkipWorkerSorting(Boolean value) { this.skipWorkerSorting = value; }

    /**
     * содержит только доступные для записи наборы услуг и работников
     */
    @JsonProperty("use_optimized_cache")
    public Boolean getUseOptimizedCache() { return useOptimizedCache; }
    @JsonProperty("use_optimized_cache")
    public void setUseOptimizedCache(Boolean value) { this.useOptimizedCache = value; }

    /**
     * если указано true - возвращает историю биллинга в поле billing (недоступно для роли guest)
     */
    @JsonProperty("with_billing")
    public Boolean getWithBilling() { return withBilling; }
    @JsonProperty("with_billing")
    public void setWithBilling(Boolean value) { this.withBilling = value; }

    /**
     * если указано true - возвращает список операций, доступных в БекОфисе в поле profiles
     * (недоступно для роли guest)
     */
    @JsonProperty("with_bop")
    public Boolean getWithBop() { return withBop; }
    @JsonProperty("with_bop")
    public void setWithBop(Boolean value) { this.withBop = value; }

    /**
     * если указано true - возвращает кампании скидочных купонов в поле campaigns
     */
    @JsonProperty("with_campaigns")
    public Boolean getWithCampaigns() { return withCampaigns; }
    @JsonProperty("with_campaigns")
    public void setWithCampaigns(Boolean value) { this.withCampaigns = value; }

    /**
     * если указано true - возвращает список скидочных акций в поле discounts
     */
    @JsonProperty("with_discounts")
    public Boolean getWithDiscounts() { return withDiscounts; }
    @JsonProperty("with_discounts")
    public void setWithDiscounts(Boolean value) { this.withDiscounts = value; }

    /**
     * дата начала расписания, для которого нужно получить скидочные акции
     */
    @JsonProperty("with_discounts_from")
    public OffsetDateTime getWithDiscountsFrom() { return withDiscountsFrom; }
    @JsonProperty("with_discounts_from")
    public void setWithDiscountsFrom(OffsetDateTime value) { this.withDiscountsFrom = value; }

    /**
     * дата окончания расписания, для которого нужно получить скидочные акции
     */
    @JsonProperty("with_discounts_to")
    public OffsetDateTime getWithDiscountsTo() { return withDiscountsTo; }
    @JsonProperty("with_discounts_to")
    public void setWithDiscountsTo(OffsetDateTime value) { this.withDiscountsTo = value; }

    /**
     * если указано true - возвращает информацию о других филиалах сети в поле networks
     */
    @JsonProperty("with_networks")
    public Boolean getWithNetworks() { return withNetworks; }
    @JsonProperty("with_networks")
    public void setWithNetworks(Boolean value) { this.withNetworks = value; }

    /**
     * если указано true - заполняет идентификаторы таксономий витрины showcaseTaxonomyID для
     * каждой таксономии (недоступно для роли guest)
     */
    @JsonProperty("with_taxonomy_showcase")
    public Boolean getWithTaxonomyShowcase() { return withTaxonomyShowcase; }
    @JsonProperty("with_taxonomy_showcase")
    public void setWithTaxonomyShowcase(Boolean value) { this.withTaxonomyShowcase = value; }

    /**
     * тип сортировки работника
     */
    @JsonProperty("worker_sorting_type")
    public WorkerSortingType getWorkerSortingType() { return workerSortingType; }
    @JsonProperty("worker_sorting_type")
    public void setWorkerSortingType(WorkerSortingType value) { this.workerSortingType = value; }
}
