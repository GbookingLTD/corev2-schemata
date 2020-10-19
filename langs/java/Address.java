package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;
import java.util.List;

public class Address {
    private String address;
    private String addressAdd;
    private String adminArea;
    private String adminAreaType;
    private String building;
    private String corps;
    private Country country;
    private String group;
    private String houseAdd;
    private String kilometer;
    private String latitude;
    private String locality;
    private String localityType;
    private String longitude;
    private List<PurpleMetroStation> metroStations;
    private String number;
    private String office;
    private String possesion;
    private String street;
    private String streetType;
    private String subAdminArea;
    private String subAdminAreaType;
    private String subLocality;
    private String subLocalityType;
    private String way;
    private String zipCode;

    @JsonProperty("address")
    public String getAddress() { return address; }
    @JsonProperty("address")
    public void setAddress(String value) { this.address = value; }

    @JsonProperty("addressAdd")
    public String getAddressAdd() { return addressAdd; }
    @JsonProperty("addressAdd")
    public void setAddressAdd(String value) { this.addressAdd = value; }

    @JsonProperty("adminArea")
    public String getAdminArea() { return adminArea; }
    @JsonProperty("adminArea")
    public void setAdminArea(String value) { this.adminArea = value; }

    @JsonProperty("adminAreaType")
    public String getAdminAreaType() { return adminAreaType; }
    @JsonProperty("adminAreaType")
    public void setAdminAreaType(String value) { this.adminAreaType = value; }

    @JsonProperty("building")
    public String getBuilding() { return building; }
    @JsonProperty("building")
    public void setBuilding(String value) { this.building = value; }

    @JsonProperty("corps")
    public String getCorps() { return corps; }
    @JsonProperty("corps")
    public void setCorps(String value) { this.corps = value; }

    @JsonProperty("country")
    public Country getCountry() { return country; }
    @JsonProperty("country")
    public void setCountry(Country value) { this.country = value; }

    @JsonProperty("group")
    public String getGroup() { return group; }
    @JsonProperty("group")
    public void setGroup(String value) { this.group = value; }

    @JsonProperty("houseAdd")
    public String getHouseAdd() { return houseAdd; }
    @JsonProperty("houseAdd")
    public void setHouseAdd(String value) { this.houseAdd = value; }

    @JsonProperty("kilometer")
    public String getKilometer() { return kilometer; }
    @JsonProperty("kilometer")
    public void setKilometer(String value) { this.kilometer = value; }

    @JsonProperty("latitude")
    public String getLatitude() { return latitude; }
    @JsonProperty("latitude")
    public void setLatitude(String value) { this.latitude = value; }

    @JsonProperty("locality")
    public String getLocality() { return locality; }
    @JsonProperty("locality")
    public void setLocality(String value) { this.locality = value; }

    @JsonProperty("localityType")
    public String getLocalityType() { return localityType; }
    @JsonProperty("localityType")
    public void setLocalityType(String value) { this.localityType = value; }

    @JsonProperty("longitude")
    public String getLongitude() { return longitude; }
    @JsonProperty("longitude")
    public void setLongitude(String value) { this.longitude = value; }

    @JsonProperty("metroStations")
    public List<PurpleMetroStation> getMetroStations() { return metroStations; }
    @JsonProperty("metroStations")
    public void setMetroStations(List<PurpleMetroStation> value) { this.metroStations = value; }

    @JsonProperty("number")
    public String getNumber() { return number; }
    @JsonProperty("number")
    public void setNumber(String value) { this.number = value; }

    @JsonProperty("office")
    public String getOffice() { return office; }
    @JsonProperty("office")
    public void setOffice(String value) { this.office = value; }

    @JsonProperty("possesion")
    public String getPossesion() { return possesion; }
    @JsonProperty("possesion")
    public void setPossesion(String value) { this.possesion = value; }

    @JsonProperty("street")
    public String getStreet() { return street; }
    @JsonProperty("street")
    public void setStreet(String value) { this.street = value; }

    @JsonProperty("streetType")
    public String getStreetType() { return streetType; }
    @JsonProperty("streetType")
    public void setStreetType(String value) { this.streetType = value; }

    @JsonProperty("subAdminArea")
    public String getSubAdminArea() { return subAdminArea; }
    @JsonProperty("subAdminArea")
    public void setSubAdminArea(String value) { this.subAdminArea = value; }

    @JsonProperty("subAdminAreaType")
    public String getSubAdminAreaType() { return subAdminAreaType; }
    @JsonProperty("subAdminAreaType")
    public void setSubAdminAreaType(String value) { this.subAdminAreaType = value; }

    @JsonProperty("subLocality")
    public String getSubLocality() { return subLocality; }
    @JsonProperty("subLocality")
    public void setSubLocality(String value) { this.subLocality = value; }

    @JsonProperty("subLocalityType")
    public String getSubLocalityType() { return subLocalityType; }
    @JsonProperty("subLocalityType")
    public void setSubLocalityType(String value) { this.subLocalityType = value; }

    @JsonProperty("way")
    public String getWay() { return way; }
    @JsonProperty("way")
    public void setWay(String value) { this.way = value; }

    @JsonProperty("zipCode")
    public String getZipCode() { return zipCode; }
    @JsonProperty("zipCode")
    public void setZipCode(String value) { this.zipCode = value; }
}
