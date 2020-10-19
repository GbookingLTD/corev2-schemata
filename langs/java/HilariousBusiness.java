package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class HilariousBusiness {
    private BackofficeIDUnion id;

    @JsonProperty("id")
    public BackofficeIDUnion getID() { return id; }
    @JsonProperty("id")
    public void setID(BackofficeIDUnion value) { this.id = value; }
}
