package ru.gbooking.apiv2;

import java.util.*;

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

    public Birthday getBirthday() { return birthday; }
    public void setBirthday(Birthday value) { this.birthday = value; }

    public String getCreatorProfileID() { return creatorProfileID; }
    public void setCreatorProfileID(String value) { this.creatorProfileID = value; }

    public String getCreatorProfileName() { return creatorProfileName; }
    public void setCreatorProfileName(String value) { this.creatorProfileName = value; }

    public String getDriverLicense() { return driverLicense; }
    public void setDriverLicense(String value) { this.driverLicense = value; }

    public List<String> getEmail() { return email; }
    public void setEmail(List<String> value) { this.email = value; }

    public FromSMS getFromSMS() { return fromSMS; }
    public void setFromSMS(FromSMS value) { this.fromSMS = value; }

    public String getMiddleName() { return middleName; }
    public void setMiddleName(String value) { this.middleName = value; }

    public String getName() { return name; }
    public void setName(String value) { this.name = value; }

    public Phone getPhone() { return phone; }
    public void setPhone(Phone value) { this.phone = value; }

    public Sex getSex() { return sex; }
    public void setSex(Sex value) { this.sex = value; }

    public String getSurname() { return surname; }
    public void setSurname(String value) { this.surname = value; }

    public String getTaxiPark() { return taxiPark; }
    public void setTaxiPark(String value) { this.taxiPark = value; }

    public PurpleTimeFrameDate getTaxiParkMemberCount() { return taxiParkMemberCount; }
    public void setTaxiParkMemberCount(PurpleTimeFrameDate value) { this.taxiParkMemberCount = value; }
}
