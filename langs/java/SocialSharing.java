package ru.gbooking.apiv2;

import java.util.*;

public class SocialSharing {
    private Boolean active;
    private Double discountAmount;
    private Boolean discountEnabled;
    private DiscountType discountType;
    private String text;
    private String widgetText;

    public Boolean getActive() { return active; }
    public void setActive(Boolean value) { this.active = value; }

    public Double getDiscountAmount() { return discountAmount; }
    public void setDiscountAmount(Double value) { this.discountAmount = value; }

    public Boolean getDiscountEnabled() { return discountEnabled; }
    public void setDiscountEnabled(Boolean value) { this.discountEnabled = value; }

    public DiscountType getDiscountType() { return discountType; }
    public void setDiscountType(DiscountType value) { this.discountType = value; }

    public String getText() { return text; }
    public void setText(String value) { this.text = value; }

    public String getWidgetText() { return widgetText; }
    public void setWidgetText(String value) { this.widgetText = value; }
}
