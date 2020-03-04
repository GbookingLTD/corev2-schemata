package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class BusinessController {
    private GetProfileByID getProfileByID;

    @JsonProperty("get_profile_by_id")
    public GetProfileByID getGetProfileByID() { return getProfileByID; }
    @JsonProperty("get_profile_by_id")
    public void setGetProfileByID(GetProfileByID value) { this.getProfileByID = value; }
}
