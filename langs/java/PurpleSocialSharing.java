package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class PurpleSocialSharing {
    private Boolean active;
    private Double discountAmount;
    private Boolean discountEnabled;
    private DiscountType discountType;
    private String text;
    private String widgetText;

    @JsonProperty("active")
    public Boolean getActive() { return active; }
    @JsonProperty("active")
    public void setActive(Boolean value) { this.active = value; }

    @JsonProperty("discountAmount")
    public Double getDiscountAmount() { return discountAmount; }
    @JsonProperty("discountAmount")
    public void setDiscountAmount(Double value) { this.discountAmount = value; }

    @JsonProperty("discountEnabled")
    public Boolean getDiscountEnabled() { return discountEnabled; }
    @JsonProperty("discountEnabled")
    public void setDiscountEnabled(Boolean value) { this.discountEnabled = value; }

    @JsonProperty("discountType")
    public DiscountType getDiscountType() { return discountType; }
    @JsonProperty("discountType")
    public void setDiscountType(DiscountType value) { this.discountType = value; }

    @JsonProperty("text")
    public String getText() { return text; }
    @JsonProperty("text")
    public void setText(String value) { this.text = value; }

    @JsonProperty("widgetText")
    public String getWidgetText() { return widgetText; }
    @JsonProperty("widgetText")
    public void setWidgetText(String value) { this.widgetText = value; }
}
