package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class AppointmentReminder {
    private ReminderStatus status;
    private Double timeReminder;

    @JsonProperty("status")
    public ReminderStatus getStatus() { return status; }
    @JsonProperty("status")
    public void setStatus(ReminderStatus value) { this.status = value; }

    @JsonProperty("time_reminder")
    public Double getTimeReminder() { return timeReminder; }
    @JsonProperty("time_reminder")
    public void setTimeReminder(Double value) { this.timeReminder = value; }
}
