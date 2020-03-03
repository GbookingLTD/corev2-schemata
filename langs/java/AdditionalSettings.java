package ru.gbooking.apiv2;

import java.util.*;

public class AdditionalSettings {
    private Double appointmentExtensionAmount;
    private AppointmentExtensionType appointmentExtensionType;

    public Double getAppointmentExtensionAmount() { return appointmentExtensionAmount; }
    public void setAppointmentExtensionAmount(Double value) { this.appointmentExtensionAmount = value; }

    public AppointmentExtensionType getAppointmentExtensionType() { return appointmentExtensionType; }
    public void setAppointmentExtensionType(AppointmentExtensionType value) { this.appointmentExtensionType = value; }
}
