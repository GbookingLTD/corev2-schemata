package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;
import java.util.List;

public class AddressSchema {
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
    private List<FullAddressMetroStation> metroStations;
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

    @JsonProperty("address_add")
    public String getAddressAdd() { return addressAdd; }
    @JsonProperty("address_add")
    public void setAddressAdd(String value) { this.addressAdd = value; }

    @JsonProperty("admin_area")
    public String getAdminArea() { return adminArea; }
    @JsonProperty("admin_area")
    public void setAdminArea(String value) { this.adminArea = value; }

    @JsonProperty("admin_area_type")
    public String getAdminAreaType() { return adminAreaType; }
    @JsonProperty("admin_area_type")
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

    @JsonProperty("house_add")
    public String getHouseAdd() { return houseAdd; }
    @JsonProperty("house_add")
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

    @JsonProperty("locality_type")
    public String getLocalityType() { return localityType; }
    @JsonProperty("locality_type")
    public void setLocalityType(String value) { this.localityType = value; }

    @JsonProperty("longitude")
    public String getLongitude() { return longitude; }
    @JsonProperty("longitude")
    public void setLongitude(String value) { this.longitude = value; }

    @JsonProperty("metroStations")
    public List<FullAddressMetroStation> getMetroStations() { return metroStations; }
    @JsonProperty("metroStations")
    public void setMetroStations(List<FullAddressMetroStation> value) { this.metroStations = value; }

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

    @JsonProperty("street_type")
    public String getStreetType() { return streetType; }
    @JsonProperty("street_type")
    public void setStreetType(String value) { this.streetType = value; }

    @JsonProperty("sub_admin_area")
    public String getSubAdminArea() { return subAdminArea; }
    @JsonProperty("sub_admin_area")
    public void setSubAdminArea(String value) { this.subAdminArea = value; }

    @JsonProperty("sub_admin_area_type")
    public String getSubAdminAreaType() { return subAdminAreaType; }
    @JsonProperty("sub_admin_area_type")
    public void setSubAdminAreaType(String value) { this.subAdminAreaType = value; }

    @JsonProperty("sub_locality")
    public String getSubLocality() { return subLocality; }
    @JsonProperty("sub_locality")
    public void setSubLocality(String value) { this.subLocality = value; }

    @JsonProperty("sub_locality_type")
    public String getSubLocalityType() { return subLocalityType; }
    @JsonProperty("sub_locality_type")
    public void setSubLocalityType(String value) { this.subLocalityType = value; }

    @JsonProperty("way")
    public String getWay() { return way; }
    @JsonProperty("way")
    public void setWay(String value) { this.way = value; }

    @JsonProperty("zip_code")
    public String getZipCode() { return zipCode; }
    @JsonProperty("zip_code")
    public void setZipCode(String value) { this.zipCode = value; }
}
