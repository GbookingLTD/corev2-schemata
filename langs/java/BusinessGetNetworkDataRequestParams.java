package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

/**
 * параметры запроса business.get_network_data
 */
public class BusinessGetNetworkDataRequestParams {
    private RequestTimeFrameDate networkID;
    private Boolean withBusinessInfo;

    /**
     * идентификатор сети
     */
    @JsonProperty("networkID")
    public RequestTimeFrameDate getNetworkID() { return networkID; }
    @JsonProperty("networkID")
    public void setNetworkID(RequestTimeFrameDate value) { this.networkID = value; }

    /**
     * Если передано true - возвращает информацию business_info/general_info по каждому бизнесу
     * в массиве businesses
     */
    @JsonProperty("with_business_info")
    public Boolean getWithBusinessInfo() { return withBusinessInfo; }
    @JsonProperty("with_business_info")
    public void setWithBusinessInfo(Boolean value) { this.withBusinessInfo = value; }
}
