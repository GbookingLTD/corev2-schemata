package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class AdditionalSettingsProperties {
    private TrapaniSnowLeopard appointmentExtensionAmount;
    private Repeats appointmentExtensionType;

    @JsonProperty("appointmentExtensionAmount")
    public TrapaniSnowLeopard getAppointmentExtensionAmount() { return appointmentExtensionAmount; }
    @JsonProperty("appointmentExtensionAmount")
    public void setAppointmentExtensionAmount(TrapaniSnowLeopard value) { this.appointmentExtensionAmount = value; }

    @JsonProperty("appointmentExtensionType")
    public Repeats getAppointmentExtensionType() { return appointmentExtensionType; }
    @JsonProperty("appointmentExtensionType")
    public void setAppointmentExtensionType(Repeats value) { this.appointmentExtensionType = value; }
}
