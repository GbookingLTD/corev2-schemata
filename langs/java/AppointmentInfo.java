package ru.gbooking.apiv2;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class AppointmentInfo {
    private RequestTimeFrameDate backofficeID;
    private boolean blockSMS;
    private String created;
    private DrinkAnswer drinkAnswer;
    private double duration;
    private boolean hideAppointmentTime;
    private String id;
    private IntegrationData integrationData;
    private Price price;
    private String shortID;
    private String start;
    private AppointmentStatus status;
    private TalkAnswer talkAnswer;
    private boolean testRecord;
    private String updated;

    @JsonProperty("backofficeID")
    public RequestTimeFrameDate getBackofficeID() { return backofficeID; }
    @JsonProperty("backofficeID")
    public void setBackofficeID(RequestTimeFrameDate value) { this.backofficeID = value; }

    @JsonProperty("blockSMS")
    public boolean getBlockSMS() { return blockSMS; }
    @JsonProperty("blockSMS")
    public void setBlockSMS(boolean value) { this.blockSMS = value; }

    @JsonProperty("created")
    public String getCreated() { return created; }
    @JsonProperty("created")
    public void setCreated(String value) { this.created = value; }

    @JsonProperty("drinkAnswer")
    public DrinkAnswer getDrinkAnswer() { return drinkAnswer; }
    @JsonProperty("drinkAnswer")
    public void setDrinkAnswer(DrinkAnswer value) { this.drinkAnswer = value; }

    @JsonProperty("duration")
    public double getDuration() { return duration; }
    @JsonProperty("duration")
    public void setDuration(double value) { this.duration = value; }

    @JsonProperty("hideAppointmentTime")
    public boolean getHideAppointmentTime() { return hideAppointmentTime; }
    @JsonProperty("hideAppointmentTime")
    public void setHideAppointmentTime(boolean value) { this.hideAppointmentTime = value; }

    @JsonProperty("id")
    public String getID() { return id; }
    @JsonProperty("id")
    public void setID(String value) { this.id = value; }

    @JsonProperty("integration_data")
    public IntegrationData getIntegrationData() { return integrationData; }
    @JsonProperty("integration_data")
    public void setIntegrationData(IntegrationData value) { this.integrationData = value; }

    @JsonProperty("price")
    public Price getPrice() { return price; }
    @JsonProperty("price")
    public void setPrice(Price value) { this.price = value; }

    @JsonProperty("shortId")
    public String getShortID() { return shortID; }
    @JsonProperty("shortId")
    public void setShortID(String value) { this.shortID = value; }

    @JsonProperty("start")
    public String getStart() { return start; }
    @JsonProperty("start")
    public void setStart(String value) { this.start = value; }

    @JsonProperty("status")
    public AppointmentStatus getStatus() { return status; }
    @JsonProperty("status")
    public void setStatus(AppointmentStatus value) { this.status = value; }

    @JsonProperty("talkAnswer")
    public TalkAnswer getTalkAnswer() { return talkAnswer; }
    @JsonProperty("talkAnswer")
    public void setTalkAnswer(TalkAnswer value) { this.talkAnswer = value; }

    @JsonProperty("testRecord")
    public boolean getTestRecord() { return testRecord; }
    @JsonProperty("testRecord")
    public void setTestRecord(boolean value) { this.testRecord = value; }

    @JsonProperty("updated")
    public String getUpdated() { return updated; }
    @JsonProperty("updated")
    public void setUpdated(String value) { this.updated = value; }
}
