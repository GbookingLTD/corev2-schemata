package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class FluffyClient {
    private String comment;
    private String id;

    @JsonProperty("comment")
    public String getComment() { return comment; }
    @JsonProperty("comment")
    public void setComment(String value) { this.comment = value; }

    @JsonProperty("id")
    public String getID() { return id; }
    @JsonProperty("id")
    public void setID(String value) { this.id = value; }
}
