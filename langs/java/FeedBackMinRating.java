package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class FeedBackMinRating {
    private TypeElement type;
    private List<String> feedBackMinRatingEnum;
    private long feedBackMinRatingDefault;

    @JsonProperty("type")
    public TypeElement getType() { return type; }
    @JsonProperty("type")
    public void setType(TypeElement value) { this.type = value; }

    @JsonProperty("enum")
    public List<String> getFeedBackMinRatingEnum() { return feedBackMinRatingEnum; }
    @JsonProperty("enum")
    public void setFeedBackMinRatingEnum(List<String> value) { this.feedBackMinRatingEnum = value; }

    @JsonProperty("default")
    public long getFeedBackMinRatingDefault() { return feedBackMinRatingDefault; }
    @JsonProperty("default")
    public void setFeedBackMinRatingDefault(long value) { this.feedBackMinRatingDefault = value; }
}
