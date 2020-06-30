package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class Reminder {
    private ReminderStatus status;
    private double timeReminder;

    @JsonProperty("status")
    public ReminderStatus getStatus() { return status; }
    @JsonProperty("status")
    public void setStatus(ReminderStatus value) { this.status = value; }

    @JsonProperty("time_reminder")
    public double getTimeReminder() { return timeReminder; }
    @JsonProperty("time_reminder")
    public void setTimeReminder(double value) { this.timeReminder = value; }
}
