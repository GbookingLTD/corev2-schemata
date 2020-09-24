package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class AdditionalClientPayment {
    private String clientID;
    private AppointmentClientPayment payment;

    @JsonProperty("clientID")
    public String getClientID() { return clientID; }
    @JsonProperty("clientID")
    public void setClientID(String value) { this.clientID = value; }

    @JsonProperty("payment")
    public AppointmentClientPayment getPayment() { return payment; }
    @JsonProperty("payment")
    public void setPayment(AppointmentClientPayment value) { this.payment = value; }
}
