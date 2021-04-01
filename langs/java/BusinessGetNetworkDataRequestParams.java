package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

/**
 * параметры запроса business.get_network_data
 */
public class BusinessGetNetworkDataRequestParams {
    private StickyContract contract;
    private BackofficeIDUnion networkID;
    private FluffyResource resource;
    private FluffyTaxonomy taxonomy;
    private Boolean withBusinessInfo;

    /**
     * данные по договору, если указано то список работников и услуг формируется на основе
     * переданного договора
     */
    @JsonProperty("contract")
    public StickyContract getContract() { return contract; }
    @JsonProperty("contract")
    public void setContract(StickyContract value) { this.contract = value; }

    /**
     * идентификатор сети
     */
    @JsonProperty("networkID")
    public BackofficeIDUnion getNetworkID() { return networkID; }
    @JsonProperty("networkID")
    public void setNetworkID(BackofficeIDUnion value) { this.networkID = value; }

    @JsonProperty("resource")
    public FluffyResource getResource() { return resource; }
    @JsonProperty("resource")
    public void setResource(FluffyResource value) { this.resource = value; }

    @JsonProperty("taxonomy")
    public FluffyTaxonomy getTaxonomy() { return taxonomy; }
    @JsonProperty("taxonomy")
    public void setTaxonomy(FluffyTaxonomy value) { this.taxonomy = value; }

    /**
     * Если передано true - возвращает информацию business_info/general_info по каждому бизнесу
     * в массиве businesses
     */
    @JsonProperty("with_business_info")
    public Boolean getWithBusinessInfo() { return withBusinessInfo; }
    @JsonProperty("with_business_info")
    public void setWithBusinessInfo(Boolean value) { this.withBusinessInfo = value; }
}
