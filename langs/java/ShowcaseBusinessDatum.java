package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;
import java.util.List;

public class ShowcaseBusinessDatum {
    private List<AddressSchema> address;
    private String email;
    private String internalID;
    private LanguageList language;
    private String name;
    private List<FaxElement> phone;
    private List<String> receptionTypes;
    private String timezone;

    /**
     * Адреса компании или филиала
     */
    @JsonProperty("address")
    public List<AddressSchema> getAddress() { return address; }
    @JsonProperty("address")
    public void setAddress(List<AddressSchema> value) { this.address = value; }

    /**
     * Список e-mail адресов компании или филиала
     */
    @JsonProperty("email")
    public String getEmail() { return email; }
    @JsonProperty("email")
    public void setEmail(String value) { this.email = value; }

    @JsonProperty("internalID")
    public String getInternalID() { return internalID; }
    @JsonProperty("internalID")
    public void setInternalID(String value) { this.internalID = value; }

    @JsonProperty("language")
    public LanguageList getLanguage() { return language; }
    @JsonProperty("language")
    public void setLanguage(LanguageList value) { this.language = value; }

    /**
     * Название бизнеса
     */
    @JsonProperty("name")
    public String getName() { return name; }
    @JsonProperty("name")
    public void setName(String value) { this.name = value; }

    /**
     * Список телефонов бизнеса
     */
    @JsonProperty("phone")
    public List<FaxElement> getPhone() { return phone; }
    @JsonProperty("phone")
    public void setPhone(List<FaxElement> value) { this.phone = value; }

    /**
     * Список видов приема филиала
     */
    @JsonProperty("receptionTypes")
    public List<String> getReceptionTypes() { return receptionTypes; }
    @JsonProperty("receptionTypes")
    public void setReceptionTypes(List<String> value) { this.receptionTypes = value; }

    @JsonProperty("timezone")
    public String getTimezone() { return timezone; }
    @JsonProperty("timezone")
    public void setTimezone(String value) { this.timezone = value; }
}
