package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;
import java.util.List;
import java.util.Map;

/**
 * Данные клиента доступные для обновления клиентом
 */
public class IndigoClient {
    private String address;
    private Data birthday;
    private String description;
    private List<String> email;
    private List<PurpleExtraField> extraFields;
    private List<PurpleFavResource> favResources;
    private String iconURL;
    private String id;
    private String insuranceNumber;
    private LanguageList language;
    private String middleName;
    private String name;
    private String passportID;
    private Sex sex;
    private String surname;

    @JsonProperty("address")
    public String getAddress() { return address; }
    @JsonProperty("address")
    public void setAddress(String value) { this.address = value; }

    @JsonProperty("birthday")
    public Data getBirthday() { return birthday; }
    @JsonProperty("birthday")
    public void setBirthday(Data value) { this.birthday = value; }

    @JsonProperty("description")
    public String getDescription() { return description; }
    @JsonProperty("description")
    public void setDescription(String value) { this.description = value; }

    @JsonProperty("email")
    public List<String> getEmail() { return email; }
    @JsonProperty("email")
    public void setEmail(List<String> value) { this.email = value; }

    @JsonProperty("extraFields")
    public List<PurpleExtraField> getExtraFields() { return extraFields; }
    @JsonProperty("extraFields")
    public void setExtraFields(List<PurpleExtraField> value) { this.extraFields = value; }

    @JsonProperty("favResources")
    public List<PurpleFavResource> getFavResources() { return favResources; }
    @JsonProperty("favResources")
    public void setFavResources(List<PurpleFavResource> value) { this.favResources = value; }

    @JsonProperty("icon_url")
    public String getIconURL() { return iconURL; }
    @JsonProperty("icon_url")
    public void setIconURL(String value) { this.iconURL = value; }

    @JsonProperty("id")
    public String getID() { return id; }
    @JsonProperty("id")
    public void setID(String value) { this.id = value; }

    @JsonProperty("insuranceNumber")
    public String getInsuranceNumber() { return insuranceNumber; }
    @JsonProperty("insuranceNumber")
    public void setInsuranceNumber(String value) { this.insuranceNumber = value; }

    @JsonProperty("language")
    public LanguageList getLanguage() { return language; }
    @JsonProperty("language")
    public void setLanguage(LanguageList value) { this.language = value; }

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

    @JsonProperty("sex")
    public Sex getSex() { return sex; }
    @JsonProperty("sex")
    public void setSex(Sex value) { this.sex = value; }

    @JsonProperty("surname")
    public String getSurname() { return surname; }
    @JsonProperty("surname")
    public void setSurname(String value) { this.surname = value; }
}
