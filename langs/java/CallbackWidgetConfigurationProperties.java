package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class CallbackWidgetConfigurationProperties {
    private BeijingPigeon title1;
    private BeijingPigeon title2;

    @JsonProperty("title1")
    public BeijingPigeon getTitle1() { return title1; }
    @JsonProperty("title1")
    public void setTitle1(BeijingPigeon value) { this.title1 = value; }

    @JsonProperty("title2")
    public BeijingPigeon getTitle2() { return title2; }
    @JsonProperty("title2")
    public void setTitle2(BeijingPigeon value) { this.title2 = value; }
}
