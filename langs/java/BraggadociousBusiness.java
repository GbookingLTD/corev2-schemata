package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;

public class BraggadociousBusiness {
    private BackofficeIDUnion id;

    /**
     * идентификатор бизнеса
     */
    @JsonProperty("id")
    public BackofficeIDUnion getID() { return id; }
    @JsonProperty("id")
    public void setID(BackofficeIDUnion value) { this.id = value; }
}
