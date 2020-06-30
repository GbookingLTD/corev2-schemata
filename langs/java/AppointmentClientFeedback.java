package ru.gbooking.apiv2;

import com.fasterxml.jackson.annotation.*;
import java.util.List;

public class AppointmentClientFeedback {
    private String complaintActionText;
    private ComplaintStatus complaintStatus;
    private String complaintText;
    private List<ExtraField> extraFields;
    private Boolean inprogress;
    private String originalMessage;
    private String rating;

    @JsonProperty("complaintActionText")
    public String getComplaintActionText() { return complaintActionText; }
    @JsonProperty("complaintActionText")
    public void setComplaintActionText(String value) { this.complaintActionText = value; }

    @JsonProperty("complaintStatus")
    public ComplaintStatus getComplaintStatus() { return complaintStatus; }
    @JsonProperty("complaintStatus")
    public void setComplaintStatus(ComplaintStatus value) { this.complaintStatus = value; }

    @JsonProperty("complaintText")
    public String getComplaintText() { return complaintText; }
    @JsonProperty("complaintText")
    public void setComplaintText(String value) { this.complaintText = value; }

    @JsonProperty("extraFields")
    public List<ExtraField> getExtraFields() { return extraFields; }
    @JsonProperty("extraFields")
    public void setExtraFields(List<ExtraField> value) { this.extraFields = value; }

    @JsonProperty("inprogress")
    public Boolean getInprogress() { return inprogress; }
    @JsonProperty("inprogress")
    public void setInprogress(Boolean value) { this.inprogress = value; }

    @JsonProperty("originalMessage")
    public String getOriginalMessage() { return originalMessage; }
    @JsonProperty("originalMessage")
    public void setOriginalMessage(String value) { this.originalMessage = value; }

    @JsonProperty("rating")
    public String getRating() { return rating; }
    @JsonProperty("rating")
    public void setRating(String value) { this.rating = value; }
}
