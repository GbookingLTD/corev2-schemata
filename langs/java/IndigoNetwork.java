package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class IndigoNetwork {
    private TaxiParkMemberCountUnion id;

    /**
     * идентификатор нетворка
     */
    @JsonProperty("id")
    public TaxiParkMemberCountUnion getID() { return id; }
    @JsonProperty("id")
    public void setID(TaxiParkMemberCountUnion value) { this.id = value; }
}
