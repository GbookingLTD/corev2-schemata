package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class PurpleAdditionalSettings {
    private Double appointmentExtensionAmount;
    private AppointmentExtensionType appointmentExtensionType;

    @JsonProperty("appointmentExtensionAmount")
    public Double getAppointmentExtensionAmount() { return appointmentExtensionAmount; }
    @JsonProperty("appointmentExtensionAmount")
    public void setAppointmentExtensionAmount(Double value) { this.appointmentExtensionAmount = value; }

    @JsonProperty("appointmentExtensionType")
    public AppointmentExtensionType getAppointmentExtensionType() { return appointmentExtensionType; }
    @JsonProperty("appointmentExtensionType")
    public void setAppointmentExtensionType(AppointmentExtensionType value) { this.appointmentExtensionType = value; }
}
