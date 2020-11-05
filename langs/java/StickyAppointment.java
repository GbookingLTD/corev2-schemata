package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class StickyAppointment {
    private String id;
    private AppointmentReminder reminder;
    private String source;

    @JsonProperty("id")
    public String getID() { return id; }
    @JsonProperty("id")
    public void setID(String value) { this.id = value; }

    @JsonProperty("reminder")
    public AppointmentReminder getReminder() { return reminder; }
    @JsonProperty("reminder")
    public void setReminder(AppointmentReminder value) { this.reminder = value; }

    @JsonProperty("source")
    public String getSource() { return source; }
    @JsonProperty("source")
    public void setSource(String value) { this.source = value; }
}
