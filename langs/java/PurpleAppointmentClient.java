package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;
import java.util.List;
import java.util.Map;

/**
 * пустой объект в момент резервирования
 */
public class PurpleAppointmentClient {
    private String address;
    private String adminComment;
    private Birthday birthday;
    private String clientCardNumber;
    private String clientComment;
    private String creatorProfileID;
    private String creatorProfileName;
    private String driverLicense;
    private List<String> email;
    private Map<String, Object> extraData;
    private String extraID;
    private Double extraVisitors;
    private String fax;
    private AppointmentClientFeedback feedback;
    private String gaClientID;
    private String houseNumber;
    private String id;
    private IncomingPhoneClass incomingPhone;
    private AdditionalClientIsraelCity israelCity;
    private Boolean isVIP;
    private AdditionalClientKupatHolim kupatHolim;
    private String language;
    private String middleName;
    private String name;
    private String passportID;
    private List<AdditionalClientPhone> phone;
    private String seasonTicketID;
    private String seasonTicketNumber;
    private Sex sex;
    private String shortID;
    private String surname;
    private String taxiPark;
    private Double taxiParkMemberCount;

    @JsonProperty("address")
    public String getAddress() { return address; }
    @JsonProperty("address")
    public void setAddress(String value) { this.address = value; }

    @JsonProperty("adminComment")
    public String getAdminComment() { return adminComment; }
    @JsonProperty("adminComment")
    public void setAdminComment(String value) { this.adminComment = value; }

    @JsonProperty("birthday")
    public Birthday getBirthday() { return birthday; }
    @JsonProperty("birthday")
    public void setBirthday(Birthday value) { this.birthday = value; }

    @JsonProperty("clientCardNumber")
    public String getClientCardNumber() { return clientCardNumber; }
    @JsonProperty("clientCardNumber")
    public void setClientCardNumber(String value) { this.clientCardNumber = value; }

    @JsonProperty("clientComment")
    public String getClientComment() { return clientComment; }
    @JsonProperty("clientComment")
    public void setClientComment(String value) { this.clientComment = value; }

    @JsonProperty("creatorProfileID")
    public String getCreatorProfileID() { return creatorProfileID; }
    @JsonProperty("creatorProfileID")
    public void setCreatorProfileID(String value) { this.creatorProfileID = value; }

    @JsonProperty("creatorProfileName")
    public String getCreatorProfileName() { return creatorProfileName; }
    @JsonProperty("creatorProfileName")
    public void setCreatorProfileName(String value) { this.creatorProfileName = value; }

    @JsonProperty("driverLicense")
    public String getDriverLicense() { return driverLicense; }
    @JsonProperty("driverLicense")
    public void setDriverLicense(String value) { this.driverLicense = value; }

    @JsonProperty("email")
    public List<String> getEmail() { return email; }
    @JsonProperty("email")
    public void setEmail(List<String> value) { this.email = value; }

    @JsonProperty("extraData")
    public Map<String, Object> getExtraData() { return extraData; }
    @JsonProperty("extraData")
    public void setExtraData(Map<String, Object> value) { this.extraData = value; }

    @JsonProperty("extraID")
    public String getExtraID() { return extraID; }
    @JsonProperty("extraID")
    public void setExtraID(String value) { this.extraID = value; }

    @JsonProperty("extraVisitors")
    public Double getExtraVisitors() { return extraVisitors; }
    @JsonProperty("extraVisitors")
    public void setExtraVisitors(Double value) { this.extraVisitors = value; }

    @JsonProperty("fax")
    public String getFax() { return fax; }
    @JsonProperty("fax")
    public void setFax(String value) { this.fax = value; }

    @JsonProperty("feedback")
    public AppointmentClientFeedback getFeedback() { return feedback; }
    @JsonProperty("feedback")
    public void setFeedback(AppointmentClientFeedback value) { this.feedback = value; }

    @JsonProperty("GAClientID")
    public String getGaClientID() { return gaClientID; }
    @JsonProperty("GAClientID")
    public void setGaClientID(String value) { this.gaClientID = value; }

    @JsonProperty("houseNumber")
    public String getHouseNumber() { return houseNumber; }
    @JsonProperty("houseNumber")
    public void setHouseNumber(String value) { this.houseNumber = value; }

    @JsonProperty("id")
    public String getID() { return id; }
    @JsonProperty("id")
    public void setID(String value) { this.id = value; }

    @JsonProperty("incomingPhone")
    public IncomingPhoneClass getIncomingPhone() { return incomingPhone; }
    @JsonProperty("incomingPhone")
    public void setIncomingPhone(IncomingPhoneClass value) { this.incomingPhone = value; }

    @JsonProperty("israelCity")
    public AdditionalClientIsraelCity getIsraelCity() { return israelCity; }
    @JsonProperty("israelCity")
    public void setIsraelCity(AdditionalClientIsraelCity value) { this.israelCity = value; }

    @JsonProperty("isVIP")
    public Boolean getIsVIP() { return isVIP; }
    @JsonProperty("isVIP")
    public void setIsVIP(Boolean value) { this.isVIP = value; }

    @JsonProperty("kupatHolim")
    public AdditionalClientKupatHolim getKupatHolim() { return kupatHolim; }
    @JsonProperty("kupatHolim")
    public void setKupatHolim(AdditionalClientKupatHolim value) { this.kupatHolim = value; }

    @JsonProperty("language")
    public String getLanguage() { return language; }
    @JsonProperty("language")
    public void setLanguage(String value) { this.language = value; }

    @JsonProperty("middleName")
    public String getMiddleName() { return middleName; }
    @JsonProperty("middleName")
    public void setMiddleName(String value) { this.middleName = value; }

    @JsonProperty("name")
    public String getName() { return name; }
    @JsonProperty("name")
    public void setName(String value) { this.name = value; }

    @JsonProperty("passportId")
    public String getPassportID() { return passportID; }
    @JsonProperty("passportId")
    public void setPassportID(String value) { this.passportID = value; }

    @JsonProperty("phone")
    public List<AdditionalClientPhone> getPhone() { return phone; }
    @JsonProperty("phone")
    public void setPhone(List<AdditionalClientPhone> value) { this.phone = value; }

    @JsonProperty("seasonTicketId")
    public String getSeasonTicketID() { return seasonTicketID; }
    @JsonProperty("seasonTicketId")
    public void setSeasonTicketID(String value) { this.seasonTicketID = value; }

    @JsonProperty("seasonTicketNumber")
    public String getSeasonTicketNumber() { return seasonTicketNumber; }
    @JsonProperty("seasonTicketNumber")
    public void setSeasonTicketNumber(String value) { this.seasonTicketNumber = value; }

    @JsonProperty("sex")
    public Sex getSex() { return sex; }
    @JsonProperty("sex")
    public void setSex(Sex value) { this.sex = value; }

    @JsonProperty("shortId")
    public String getShortID() { return shortID; }
    @JsonProperty("shortId")
    public void setShortID(String value) { this.shortID = value; }

    @JsonProperty("surname")
    public String getSurname() { return surname; }
    @JsonProperty("surname")
    public void setSurname(String value) { this.surname = value; }

    @JsonProperty("taxiPark")
    public String getTaxiPark() { return taxiPark; }
    @JsonProperty("taxiPark")
    public void setTaxiPark(String value) { this.taxiPark = value; }

    @JsonProperty("taxiParkMemberCount")
    public Double getTaxiParkMemberCount() { return taxiParkMemberCount; }
    @JsonProperty("taxiParkMemberCount")
    public void setTaxiParkMemberCount(Double value) { this.taxiParkMemberCount = value; }
}
