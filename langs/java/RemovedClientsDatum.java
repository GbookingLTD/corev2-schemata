package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class RemovedClientsDatum {
    private AppointmentClientAppear appear;
    private PurpleAppointmentClient client;
    private String created;
    private AppointmentClientPayment payment;
    private String paymentInvoice;
    private String source;
    private AppointmentStatus status;

    @JsonProperty("appear")
    public AppointmentClientAppear getAppear() { return appear; }
    @JsonProperty("appear")
    public void setAppear(AppointmentClientAppear value) { this.appear = value; }

    @JsonProperty("client")
    public PurpleAppointmentClient getClient() { return client; }
    @JsonProperty("client")
    public void setClient(PurpleAppointmentClient value) { this.client = value; }

    @JsonProperty("created")
    public String getCreated() { return created; }
    @JsonProperty("created")
    public void setCreated(String value) { this.created = value; }

    @JsonProperty("payment")
    public AppointmentClientPayment getPayment() { return payment; }
    @JsonProperty("payment")
    public void setPayment(AppointmentClientPayment value) { this.payment = value; }

    @JsonProperty("payment_invoice")
    public String getPaymentInvoice() { return paymentInvoice; }
    @JsonProperty("payment_invoice")
    public void setPaymentInvoice(String value) { this.paymentInvoice = value; }

    @JsonProperty("source")
    public String getSource() { return source; }
    @JsonProperty("source")
    public void setSource(String value) { this.source = value; }

    @JsonProperty("status")
    public AppointmentStatus getStatus() { return status; }
    @JsonProperty("status")
    public void setStatus(AppointmentStatus value) { this.status = value; }
}
