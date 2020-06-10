package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

/**
 * данные, передаваемые в ответ
 */
public class Appointment {
    private Map<String, Object> additionalInfo;
    private List<AdditionalClientAppear> additionalClientAppears;
    private List<AdditionalClientPayment> additionalClientPayments;
    private List<AdditionalClientElement> additionalClients;
    private List<AdditionalClientSource> additionalClientSources;
    private List<AdditionalClientStatus> additionalClientStatuses;
    private List<AdditionalClientUtm> additionalClientUtms;
    private List<AdditionalField> additionalFields;
    private List<AdditionalProduct> additionalProducts;
    private List<AppointmentTaxonomy> additionalTaxonomies;
    private String address;
    private String adjacentID;
    private AppointmentInfo appointment;
    private String autoPhoneCallStatus;
    private List<String> bannedClients;
    private AppointmentBusiness business;
    private Cabinet cabinet;
    private Double capacity;
    private String changeReason;
    private PurpleAppointmentClient client;
    private AppointmentClientAppear clientAppear;
    private String clientMedCode;
    private AppointmentClientPayment clientPayment;
    private String clientPaymentInvoice;
    private String clientPaymentTransactionID;
    private String clientComment;
    private List<AppointmentClientVisitor> clientVisitors;
    private String color;
    private String destinationKeyword;
    private String destinationLink;
    private List<ExtraField> extraFields;
    private Boolean gt;
    private String gtTimeFrame;
    private Location location;
    private Boolean masterImportance;
    private Double minClients;
    private double moveCounter;
    private boolean movedByRobot;
    private Boolean movedFromFired;
    private String networkID;
    private String notes;
    private Order order;
    private Boolean preferredResource;
    private String promoCode;
    private String refererLink;
    private String referrer;
    private Reminder reminder;
    private List<RemovedClientsDatum> removedClientsData;
    private AppointmentResource resource;
    private Review review;
    private Room room;
    private AppointmentShowcase showcase;
    private String socialToken;
    private String source;
    private AppointmentTaxonomy taxonomy;
    private Map<String, Object> utm;
    private Boolean withCoSale;

    @JsonProperty("additional_info")
    public Map<String, Object> getAdditionalInfo() { return additionalInfo; }
    @JsonProperty("additional_info")
    public void setAdditionalInfo(Map<String, Object> value) { this.additionalInfo = value; }

    @JsonProperty("additionalClientAppears")
    public List<AdditionalClientAppear> getAdditionalClientAppears() { return additionalClientAppears; }
    @JsonProperty("additionalClientAppears")
    public void setAdditionalClientAppears(List<AdditionalClientAppear> value) { this.additionalClientAppears = value; }

    @JsonProperty("additionalClientPayments")
    public List<AdditionalClientPayment> getAdditionalClientPayments() { return additionalClientPayments; }
    @JsonProperty("additionalClientPayments")
    public void setAdditionalClientPayments(List<AdditionalClientPayment> value) { this.additionalClientPayments = value; }

    @JsonProperty("additionalClients")
    public List<AdditionalClientElement> getAdditionalClients() { return additionalClients; }
    @JsonProperty("additionalClients")
    public void setAdditionalClients(List<AdditionalClientElement> value) { this.additionalClients = value; }

    @JsonProperty("additionalClientSources")
    public List<AdditionalClientSource> getAdditionalClientSources() { return additionalClientSources; }
    @JsonProperty("additionalClientSources")
    public void setAdditionalClientSources(List<AdditionalClientSource> value) { this.additionalClientSources = value; }

    @JsonProperty("additionalClientStatuses")
    public List<AdditionalClientStatus> getAdditionalClientStatuses() { return additionalClientStatuses; }
    @JsonProperty("additionalClientStatuses")
    public void setAdditionalClientStatuses(List<AdditionalClientStatus> value) { this.additionalClientStatuses = value; }

    @JsonProperty("additionalClientUtms")
    public List<AdditionalClientUtm> getAdditionalClientUtms() { return additionalClientUtms; }
    @JsonProperty("additionalClientUtms")
    public void setAdditionalClientUtms(List<AdditionalClientUtm> value) { this.additionalClientUtms = value; }

    @JsonProperty("additionalFields")
    public List<AdditionalField> getAdditionalFields() { return additionalFields; }
    @JsonProperty("additionalFields")
    public void setAdditionalFields(List<AdditionalField> value) { this.additionalFields = value; }

    @JsonProperty("additionalProducts")
    public List<AdditionalProduct> getAdditionalProducts() { return additionalProducts; }
    @JsonProperty("additionalProducts")
    public void setAdditionalProducts(List<AdditionalProduct> value) { this.additionalProducts = value; }

    @JsonProperty("additionalTaxonomies")
    public List<AppointmentTaxonomy> getAdditionalTaxonomies() { return additionalTaxonomies; }
    @JsonProperty("additionalTaxonomies")
    public void setAdditionalTaxonomies(List<AppointmentTaxonomy> value) { this.additionalTaxonomies = value; }

    @JsonProperty("address")
    public String getAddress() { return address; }
    @JsonProperty("address")
    public void setAddress(String value) { this.address = value; }

    @JsonProperty("adjacentId")
    public String getAdjacentID() { return adjacentID; }
    @JsonProperty("adjacentId")
    public void setAdjacentID(String value) { this.adjacentID = value; }

    @JsonProperty("appointment")
    public AppointmentInfo getAppointment() { return appointment; }
    @JsonProperty("appointment")
    public void setAppointment(AppointmentInfo value) { this.appointment = value; }

    @JsonProperty("autoPhoneCallStatus")
    public String getAutoPhoneCallStatus() { return autoPhoneCallStatus; }
    @JsonProperty("autoPhoneCallStatus")
    public void setAutoPhoneCallStatus(String value) { this.autoPhoneCallStatus = value; }

    @JsonProperty("bannedClients")
    public List<String> getBannedClients() { return bannedClients; }
    @JsonProperty("bannedClients")
    public void setBannedClients(List<String> value) { this.bannedClients = value; }

    @JsonProperty("business")
    public AppointmentBusiness getBusiness() { return business; }
    @JsonProperty("business")
    public void setBusiness(AppointmentBusiness value) { this.business = value; }

    @JsonProperty("cabinet")
    public Cabinet getCabinet() { return cabinet; }
    @JsonProperty("cabinet")
    public void setCabinet(Cabinet value) { this.cabinet = value; }

    @JsonProperty("capacity")
    public Double getCapacity() { return capacity; }
    @JsonProperty("capacity")
    public void setCapacity(Double value) { this.capacity = value; }

    @JsonProperty("changeReason")
    public String getChangeReason() { return changeReason; }
    @JsonProperty("changeReason")
    public void setChangeReason(String value) { this.changeReason = value; }

    @JsonProperty("client")
    public PurpleAppointmentClient getClient() { return client; }
    @JsonProperty("client")
    public void setClient(PurpleAppointmentClient value) { this.client = value; }

    @JsonProperty("client_appear")
    public AppointmentClientAppear getClientAppear() { return clientAppear; }
    @JsonProperty("client_appear")
    public void setClientAppear(AppointmentClientAppear value) { this.clientAppear = value; }

    @JsonProperty("client_med_code")
    public String getClientMedCode() { return clientMedCode; }
    @JsonProperty("client_med_code")
    public void setClientMedCode(String value) { this.clientMedCode = value; }

    @JsonProperty("client_payment")
    public AppointmentClientPayment getClientPayment() { return clientPayment; }
    @JsonProperty("client_payment")
    public void setClientPayment(AppointmentClientPayment value) { this.clientPayment = value; }

    @JsonProperty("client_payment_invoice")
    public String getClientPaymentInvoice() { return clientPaymentInvoice; }
    @JsonProperty("client_payment_invoice")
    public void setClientPaymentInvoice(String value) { this.clientPaymentInvoice = value; }

    @JsonProperty("client_payment_transaction_id")
    public String getClientPaymentTransactionID() { return clientPaymentTransactionID; }
    @JsonProperty("client_payment_transaction_id")
    public void setClientPaymentTransactionID(String value) { this.clientPaymentTransactionID = value; }

    @JsonProperty("clientComment")
    public String getClientComment() { return clientComment; }
    @JsonProperty("clientComment")
    public void setClientComment(String value) { this.clientComment = value; }

    @JsonProperty("clientVisitors")
    public List<AppointmentClientVisitor> getClientVisitors() { return clientVisitors; }
    @JsonProperty("clientVisitors")
    public void setClientVisitors(List<AppointmentClientVisitor> value) { this.clientVisitors = value; }

    @JsonProperty("color")
    public String getColor() { return color; }
    @JsonProperty("color")
    public void setColor(String value) { this.color = value; }

    @JsonProperty("destinationKeyword")
    public String getDestinationKeyword() { return destinationKeyword; }
    @JsonProperty("destinationKeyword")
    public void setDestinationKeyword(String value) { this.destinationKeyword = value; }

    @JsonProperty("destinationLink")
    public String getDestinationLink() { return destinationLink; }
    @JsonProperty("destinationLink")
    public void setDestinationLink(String value) { this.destinationLink = value; }

    @JsonProperty("extraFields")
    public List<ExtraField> getExtraFields() { return extraFields; }
    @JsonProperty("extraFields")
    public void setExtraFields(List<ExtraField> value) { this.extraFields = value; }

    @JsonProperty("gt")
    public Boolean getGt() { return gt; }
    @JsonProperty("gt")
    public void setGt(Boolean value) { this.gt = value; }

    @JsonProperty("gtTimeFrame")
    public String getGtTimeFrame() { return gtTimeFrame; }
    @JsonProperty("gtTimeFrame")
    public void setGtTimeFrame(String value) { this.gtTimeFrame = value; }

    @JsonProperty("location")
    public Location getLocation() { return location; }
    @JsonProperty("location")
    public void setLocation(Location value) { this.location = value; }

    @JsonProperty("masterImportance")
    public Boolean getMasterImportance() { return masterImportance; }
    @JsonProperty("masterImportance")
    public void setMasterImportance(Boolean value) { this.masterImportance = value; }

    @JsonProperty("minClients")
    public Double getMinClients() { return minClients; }
    @JsonProperty("minClients")
    public void setMinClients(Double value) { this.minClients = value; }

    @JsonProperty("moveCounter")
    public double getMoveCounter() { return moveCounter; }
    @JsonProperty("moveCounter")
    public void setMoveCounter(double value) { this.moveCounter = value; }

    @JsonProperty("movedByRobot")
    public boolean getMovedByRobot() { return movedByRobot; }
    @JsonProperty("movedByRobot")
    public void setMovedByRobot(boolean value) { this.movedByRobot = value; }

    @JsonProperty("movedFromFired")
    public Boolean getMovedFromFired() { return movedFromFired; }
    @JsonProperty("movedFromFired")
    public void setMovedFromFired(Boolean value) { this.movedFromFired = value; }

    @JsonProperty("networkID")
    public String getNetworkID() { return networkID; }
    @JsonProperty("networkID")
    public void setNetworkID(String value) { this.networkID = value; }

    @JsonProperty("notes")
    public String getNotes() { return notes; }
    @JsonProperty("notes")
    public void setNotes(String value) { this.notes = value; }

    @JsonProperty("order")
    public Order getOrder() { return order; }
    @JsonProperty("order")
    public void setOrder(Order value) { this.order = value; }

    @JsonProperty("preferredResource")
    public Boolean getPreferredResource() { return preferredResource; }
    @JsonProperty("preferredResource")
    public void setPreferredResource(Boolean value) { this.preferredResource = value; }

    @JsonProperty("promoCode")
    public String getPromoCode() { return promoCode; }
    @JsonProperty("promoCode")
    public void setPromoCode(String value) { this.promoCode = value; }

    @JsonProperty("refererLink")
    public String getRefererLink() { return refererLink; }
    @JsonProperty("refererLink")
    public void setRefererLink(String value) { this.refererLink = value; }

    @JsonProperty("referrer")
    public String getReferrer() { return referrer; }
    @JsonProperty("referrer")
    public void setReferrer(String value) { this.referrer = value; }

    @JsonProperty("reminder")
    public Reminder getReminder() { return reminder; }
    @JsonProperty("reminder")
    public void setReminder(Reminder value) { this.reminder = value; }

    @JsonProperty("removedClientsData")
    public List<RemovedClientsDatum> getRemovedClientsData() { return removedClientsData; }
    @JsonProperty("removedClientsData")
    public void setRemovedClientsData(List<RemovedClientsDatum> value) { this.removedClientsData = value; }

    @JsonProperty("resource")
    public AppointmentResource getResource() { return resource; }
    @JsonProperty("resource")
    public void setResource(AppointmentResource value) { this.resource = value; }

    @JsonProperty("review")
    public Review getReview() { return review; }
    @JsonProperty("review")
    public void setReview(Review value) { this.review = value; }

    @JsonProperty("room")
    public Room getRoom() { return room; }
    @JsonProperty("room")
    public void setRoom(Room value) { this.room = value; }

    @JsonProperty("showcase")
    public AppointmentShowcase getShowcase() { return showcase; }
    @JsonProperty("showcase")
    public void setShowcase(AppointmentShowcase value) { this.showcase = value; }

    @JsonProperty("socialToken")
    public String getSocialToken() { return socialToken; }
    @JsonProperty("socialToken")
    public void setSocialToken(String value) { this.socialToken = value; }

    @JsonProperty("source")
    public String getSource() { return source; }
    @JsonProperty("source")
    public void setSource(String value) { this.source = value; }

    @JsonProperty("taxonomy")
    public AppointmentTaxonomy getTaxonomy() { return taxonomy; }
    @JsonProperty("taxonomy")
    public void setTaxonomy(AppointmentTaxonomy value) { this.taxonomy = value; }

    @JsonProperty("utm")
    public Map<String, Object> getUtm() { return utm; }
    @JsonProperty("utm")
    public void setUtm(Map<String, Object> value) { this.utm = value; }

    @JsonProperty("withCoSale")
    public Boolean getWithCoSale() { return withCoSale; }
    @JsonProperty("withCoSale")
    public void setWithCoSale(Boolean value) { this.withCoSale = value; }
}
