package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class PurpleMetaEnum {
    private String planClinic;
    private String planClinicOnline;
    private String oncallOnline;
    private String planOnline;

    @JsonProperty("PLAN_CLINIC")
    public String getPlanClinic() { return planClinic; }
    @JsonProperty("PLAN_CLINIC")
    public void setPlanClinic(String value) { this.planClinic = value; }

    @JsonProperty("PLAN_CLINIC_ONLINE")
    public String getPlanClinicOnline() { return planClinicOnline; }
    @JsonProperty("PLAN_CLINIC_ONLINE")
    public void setPlanClinicOnline(String value) { this.planClinicOnline = value; }

    @JsonProperty("ONCALL_ONLINE")
    public String getOncallOnline() { return oncallOnline; }
    @JsonProperty("ONCALL_ONLINE")
    public void setOncallOnline(String value) { this.oncallOnline = value; }

    @JsonProperty("PLAN_ONLINE")
    public String getPlanOnline() { return planOnline; }
    @JsonProperty("PLAN_ONLINE")
    public void setPlanOnline(String value) { this.planOnline = value; }
}
