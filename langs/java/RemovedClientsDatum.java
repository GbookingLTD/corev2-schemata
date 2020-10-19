package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;
import java.time.OffsetDateTime;

public class RemovedClientsDatum {
    private AppointmentClientAppear appear;
    private AdditionalClientElement client;
    private OffsetDateTime created;
    private AppointmentClientPayment payment;
    private String paymentInvoice;
    private String paymentTransactionID;
    private String source;
    private AppointmentStatus status;

    @JsonProperty("appear")
    public AppointmentClientAppear getAppear() { return appear; }
    @JsonProperty("appear")
    public void setAppear(AppointmentClientAppear value) { this.appear = value; }

    @JsonProperty("client")
    public AdditionalClientElement getClient() { return client; }
    @JsonProperty("client")
    public void setClient(AdditionalClientElement value) { this.client = value; }

    @JsonProperty("created")
    public OffsetDateTime getCreated() { return created; }
    @JsonProperty("created")
    public void setCreated(OffsetDateTime value) { this.created = value; }

    @JsonProperty("payment")
    public AppointmentClientPayment getPayment() { return payment; }
    @JsonProperty("payment")
    public void setPayment(AppointmentClientPayment value) { this.payment = value; }

    @JsonProperty("payment_invoice")
    public String getPaymentInvoice() { return paymentInvoice; }
    @JsonProperty("payment_invoice")
    public void setPaymentInvoice(String value) { this.paymentInvoice = value; }

    @JsonProperty("payment_transaction_id")
    public String getPaymentTransactionID() { return paymentTransactionID; }
    @JsonProperty("payment_transaction_id")
    public void setPaymentTransactionID(String value) { this.paymentTransactionID = value; }

    @JsonProperty("source")
    public String getSource() { return source; }
    @JsonProperty("source")
    public void setSource(String value) { this.source = value; }

    @JsonProperty("status")
    public AppointmentStatus getStatus() { return status; }
    @JsonProperty("status")
    public void setStatus(AppointmentStatus value) { this.status = value; }
}
