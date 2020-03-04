package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

/**
 * Данные клиента
 */
public class Client {
    private Birthday birthday;
    private String creatorProfileID;
    private String creatorProfileName;
    private String driverLicense;
    private List<String> email;
    private FromSMS fromSMS;
    private String middleName;
    private String name;
    private Phone phone;
    private Sex sex;
    private String surname;
    private String taxiPark;
    private PurpleTimeFrameDate taxiParkMemberCount;

    @JsonProperty("birthday")
    public Birthday getBirthday() { return birthday; }
    @JsonProperty("birthday")
    public void setBirthday(Birthday value) { this.birthday = value; }

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

    @JsonProperty("fromSms")
    public FromSMS getFromSMS() { return fromSMS; }
    @JsonProperty("fromSms")
    public void setFromSMS(FromSMS value) { this.fromSMS = value; }

    @JsonProperty("middle_name")
    public String getMiddleName() { return middleName; }
    @JsonProperty("middle_name")
    public void setMiddleName(String value) { this.middleName = value; }

    @JsonProperty("name")
    public String getName() { return name; }
    @JsonProperty("name")
    public void setName(String value) { this.name = value; }

    @JsonProperty("phone")
    public Phone getPhone() { return phone; }
    @JsonProperty("phone")
    public void setPhone(Phone value) { this.phone = value; }

    @JsonProperty("sex")
    public Sex getSex() { return sex; }
    @JsonProperty("sex")
    public void setSex(Sex value) { this.sex = value; }

    @JsonProperty("surname")
    public String getSurname() { return surname; }
    @JsonProperty("surname")
    public void setSurname(String value) { this.surname = value; }

    @JsonProperty("taxiPark")
    public String getTaxiPark() { return taxiPark; }
    @JsonProperty("taxiPark")
    public void setTaxiPark(String value) { this.taxiPark = value; }

    @JsonProperty("taxiParkMemberCount")
    public PurpleTimeFrameDate getTaxiParkMemberCount() { return taxiParkMemberCount; }
    @JsonProperty("taxiParkMemberCount")
    public void setTaxiParkMemberCount(PurpleTimeFrameDate value) { this.taxiParkMemberCount = value; }
}
