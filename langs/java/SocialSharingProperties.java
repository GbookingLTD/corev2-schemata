package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class SocialSharingProperties {
    private ChiangMaiGoose active;
    private Birthday widgetText;
    private Birthday text;
    private BeijingPigeon discountEnabled;
    private BackofficeType discountType;
    private Birthday discountAmount;

    @JsonProperty("active")
    public ChiangMaiGoose getActive() { return active; }
    @JsonProperty("active")
    public void setActive(ChiangMaiGoose value) { this.active = value; }

    @JsonProperty("widgetText")
    public Birthday getWidgetText() { return widgetText; }
    @JsonProperty("widgetText")
    public void setWidgetText(Birthday value) { this.widgetText = value; }

    @JsonProperty("text")
    public Birthday getText() { return text; }
    @JsonProperty("text")
    public void setText(Birthday value) { this.text = value; }

    @JsonProperty("discountEnabled")
    public BeijingPigeon getDiscountEnabled() { return discountEnabled; }
    @JsonProperty("discountEnabled")
    public void setDiscountEnabled(BeijingPigeon value) { this.discountEnabled = value; }

    @JsonProperty("discountType")
    public BackofficeType getDiscountType() { return discountType; }
    @JsonProperty("discountType")
    public void setDiscountType(BackofficeType value) { this.discountType = value; }

    @JsonProperty("discountAmount")
    public Birthday getDiscountAmount() { return discountAmount; }
    @JsonProperty("discountAmount")
    public void setDiscountAmount(Birthday value) { this.discountAmount = value; }
}
